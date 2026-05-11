# Secyra AdBlocker

A lightweight browser extension that blocks common advertising and tracking requests using the `webRequest` blocking API.

## Overview

- **Name:** Secyra AdBlocker
- **Version:** 1.0
- **Manifest:** v2
- **Background script:** `background.js`

## What it does

The extension listens to outgoing web requests and cancels requests that match a predefined set of ad/tracker URL patterns.

Examples of blocked domains include:

- `google-analytics.com`
- `doubleclick.net`
- `adnxs.com`
- `criteo.com`
- `rubiconproject.com`
- `pubmatic.com`
- `openx.net`

## Project structure

- `manifest.json` – extension metadata, permissions, icon mapping, background script config
- `background.js` – request interception and blocking rules
- `icons/` – extension icons

## Installation (Developer mode)

1. Open your browser’s extensions page (for Chromium-based browsers: `chrome://extensions`).
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select your local clone of this project directory.
   (for example: `path/to/Secyra-AdBlocker`).

## Notes

- This project currently uses **Manifest V2**, which may have limited support in newer browser versions.
- There is no automated lint/build/test setup in this repository at this time.
