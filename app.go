package main

import (
	"context"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) UploadCompose() {
	selected, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
		Title: "Select a file",
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
		return
	}

	runtime.LogDebug(a.ctx, "Selected file: "+selected)
}
