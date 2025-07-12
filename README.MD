# Biorev Task - Test Automation Framework

![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white)


## Overview

This repository contains the test automation framework using Cypress with native TypeScript.  

## Features

- **Cypress Integration**: Fast and reliable end-to-end testing.
- **CI/CD Integration**: Seamless integration with CI pipelines.

## CI/CD Integration

The project includes integration with CI/CD pipelines, automatically triggering tests on each commit.

## Project Structure

├── .github/workflows # GitHub Actions workflows  
├── cucumber/e2e # Test scripts and page objects  
├── package.json # Project dependencies and scripts  
├── tsconfig.json # TypeScript configuration  

## Getting Started

### Installation

1. Clone the repository:  
- git clone this repositroy.

2. Install dependencies:  
- npm i

3. To run the project:  
* npx cypress run - To run all the test scenarios in headless mode.
* npx cypress open - To run all the tests in headed mode.