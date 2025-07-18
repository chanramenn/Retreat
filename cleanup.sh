#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting cleanup process...${NC}"

# Remove Netlify-specific files
echo -e "\n${YELLOW}Removing Netlify-specific files...${NC}"
rm -f netlify.toml
echo -e "${GREEN}Removed netlify.toml${NC}"

# Remove redundant documentation
echo -e "\n${YELLOW}Removing redundant documentation...${NC}"
rm -f DEPLOYMENT.md
echo -e "${GREEN}Removed DEPLOYMENT.md${NC}"
rm -f PRE-DEPLOYMENT-CHECKLIST.md
echo -e "${GREEN}Removed PRE-DEPLOYMENT-CHECKLIST.md${NC}"

# Remove Bun-related files
echo -e "\n${YELLOW}Removing Bun-related files...${NC}"
rm -f bun.lockb
echo -e "${GREEN}Removed bun.lockb${NC}"

# Remove macOS system files
echo -e "\n${YELLOW}Removing macOS system files...${NC}"
find . -name ".DS_Store" -delete
echo -e "${GREEN}Removed .DS_Store files${NC}"

# Remove HEIC files
echo -e "\n${YELLOW}Removing HEIC files...${NC}"
find ./public/images -name "*.heic" -delete
echo -e "${GREEN}Removed HEIC files${NC}"

echo -e "\n${GREEN}Cleanup complete!${NC}"
echo -e "${YELLOW}Note: You may want to manually review and remove unused images in public/images folder.${NC}"