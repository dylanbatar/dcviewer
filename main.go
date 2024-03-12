package main

import (
	"embed"
	"fmt"
	"io/fs"
	"os"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func settingDir() {
	err := os.MkdirAll("/Users/dylanbatar/dcviewer/composes", fs.FileMode(os.ModePerm))

	if err != nil {
		fmt.Println("was not able to create main directory", err.Error())
	}

	fmt.Println("directory created successfully")
}

func main() {
	// Create an instance of the app structure
	app := NewApp()
	settingDir()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "dcviewer",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
