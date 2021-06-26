# ODIN-desktop
![GitHub package.json version](https://img.shields.io/github/package-json/v/NeonWizard/ODIN-Desktop)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/NeonWizard/ODIN-Desktop/Unit%20Testing)
![GitHub Repo stars](https://img.shields.io/github/stars/neonwizard/odin?style=social)

A desktop interface for ODIN, my centralized GPT-2 web API.

ODIN is primarily a Flask RPC API. Token-based authentication is available to ensure only certain users can perform text generation. Adding neural networks to the API is as simple as dragging and dropping into the models folder. There is also a command-line tool to be able to quickly and locally test or use the core ODIN logic without having to go through the web API.

## Vue commands
```bash
# Setup project
npm install

# Compile and hot-reload for development
npm run serve

# Compile and minify for production
npm run build

# Lint and optionally fix files
npm run lint
npm run lint-fix
```

### Customize Vue configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
