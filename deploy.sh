#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment to GitHub Pages...${NC}"

# Step 1: Check for uncommitted changes
echo -e "\n${YELLOW}Checking for uncommitted changes...${NC}"
if [[ -n $(git status -s) ]]; then
  echo -e "${RED}You have uncommitted changes. Please commit or stash them before deploying.${NC}"
  git status
  exit 1
else
  echo -e "${GREEN}No uncommitted changes found.${NC}"
fi

# Step 2: Run type checking
echo -e "\n${YELLOW}Running TypeScript type checking...${NC}"
npm run type-check
if [ $? -ne 0 ]; then
  echo -e "${RED}Type checking failed. Please fix the errors before deploying.${NC}"
  exit 1
else
  echo -e "${GREEN}Type checking passed.${NC}"
fi

# Step 3: Run linting
echo -e "\n${YELLOW}Running linting...${NC}"
npm run lint
if [ $? -ne 0 ]; then
  echo -e "${YELLOW}Linting found issues. Consider fixing them before deploying.${NC}"
  read -p "Continue anyway? (y/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
  fi
else
  echo -e "${GREEN}Linting passed.${NC}"
fi

# Step 4: Build for production
echo -e "\n${YELLOW}Building for production...${NC}"
npm run build
if [ $? -ne 0 ]; then
  echo -e "${RED}Build failed. Please fix the errors before deploying.${NC}"
  exit 1
else
  echo -e "${GREEN}Build successful.${NC}"
fi

# Step 5: Deploy to GitHub Pages
echo -e "\n${YELLOW}Deploying to GitHub Pages...${NC}"
npm run deploy

if [ $? -ne 0 ]; then
  echo -e "${RED}Deployment failed. Please check the error messages.${NC}"
  exit 1
else
  echo -e "${GREEN}Deployment successful!${NC}"
  echo -e "\n${YELLOW}Your site should be available at https://retreaty.space in a few minutes.${NC}"
fi