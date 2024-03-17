package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"strings"
	"time"

	"dylanbatar/dcviewer/internal/domain"

	"github.com/google/uuid"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"gopkg.in/yaml.v3"
)

// App struct
type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) UploadCompose() *domain.DcViewerCompose {
	selected, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
		Title:            "Select a file",
		DefaultDirectory: "/Users/dylanbatar",
		Filters: []runtime.FileFilter{
			{
				DisplayName: "YML Files",
				Pattern:     "*.yml",
			},
			{
				DisplayName: "YAML Files",
				Pattern:     "*.yaml",
			},
		},
	})

	if err != nil {
		runtime.LogDebug(a.ctx, err.Error())
		return nil
	}

	if selected != "" {
		err = copyFile(selected)
		if err != nil {
			runtime.LogDebug(a.ctx, err.Error())
		}
	}

	runtime.LogDebug(a.ctx, "Selected file: "+selected)
	fileNameId := createFileName()
	var dcViewerComposer = formtDcViewerComposer(fileNameId, "new file", "image")

	return &dcViewerComposer
}

func copyFile(filePath string) error {
	uuid := uuid.New()
	file, err := os.Create(fmt.Sprintf("/Users/dylanbatar/dcviewer/composes/%v.yml", uuid))

	if err != nil {
		fmt.Println("was not able to create file", err.Error())
		return err
	}

	originalFile, err := os.ReadFile(filePath)
	if err != nil {
		fmt.Println("was not able to read original file", err.Error())
		return err
	}

	if err != nil {
		log.Println(err.Error())
		return fmt.Errorf("error copy file to compose directory")
	}

	defer file.Close()

	_, err = file.Write(originalFile)

	if err != nil {
		log.Fatal(err)
	}
	return nil
}

func (a *App) ReadComposeFile(fileName string) (compose *domain.Compose, err error) {
	yamlFile, err := os.ReadFile(fmt.Sprintf("/Users/dylanbatar/dcviewer/composes/%s", fileName))

	if err != nil {
		runtime.LogDebug(a.ctx, err.Error())
		return nil, err
	}

	var composeFile domain.Compose
	yaml.Unmarshal(yamlFile, &composeFile)

	return &composeFile, nil
}

func (a *App) ListComposes() []domain.DcViewerCompose {
	files, err := os.ReadDir("/Users/dylanbatar/dcviewer/composes")

	if err != nil {
		runtime.LogDebug(a.ctx, err.Error())
	}

	var composeFiles []domain.DcViewerCompose
	for _, file := range files {
		splitFileName := strings.Split(file.Name(), ".")
		extensionFile := splitFileName[len(splitFileName)-1]

		if extensionFile != "yml" && extensionFile != "yaml" {
			continue
		}

		dcViewerComposer := formtDcViewerComposer(file.Name(), "description", "image")
		composeFiles = append(composeFiles, dcViewerComposer)
	}

	return composeFiles
}

func formtDcViewerComposer(name, description, image string) domain.DcViewerCompose {
	var dcCompose = domain.DcViewerCompose{
		Name:        name,
		Description: description,
		Image:       image,
		CreateAt:    time.Now().Format(time.RFC3339),
		UpdateAt:    time.Now().Format(time.RFC3339),
	}

	return dcCompose
}

func createFileName() string {
	uuid := uuid.New()
	return fmt.Sprintf("%v.yml", uuid)
}
