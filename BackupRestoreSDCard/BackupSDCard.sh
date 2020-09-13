#!/usr/bin/env bash

echo "======== Backup Script ========"
echo ""

SD_CARD=""
IMAGE="~/Desktop/BackupImage.dmg"


# STEP-I: Locate the SDCard Device

diskutil list

# echo "Getting the list of devices"

# read "Device Name"
read -p "Enter the SDCard Device to Clone: " SDCARD

echo "[+] Device Selected: ${SDCARD}"



# STEP-II: Clone the SDCard to Machine

echo "[+] Backup Started, please wait!!!"
sudo dd if="${SDCARD}" of="${IMAGE}"

echo "[+] SDCard backed up successfully at location: ${IMAGE}"


exit 0