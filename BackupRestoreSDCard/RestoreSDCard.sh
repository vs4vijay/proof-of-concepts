#!/usr/bin/env bash

echo "======== Restore Script ========"
echo ""

IMAGE="~/Desktop/BackupImage.dmg"


# STEP-I: Locate the SDCard Device

diskutil list

# echo "Getting the list of devices"

# read "Device Name"
read -p "Enter the SDCard Device to restore: " SDCARD

echo "[+] Device Selected: ${SDCARD}"



# STEP-II: Unmount the device

echo "[+] Unmounting the device: ${SDCARD}"
diskutil unmountDisk "${SDCARD}"



# STEP-III: Format the device to FAT16

echo "[+] Unmounting the device to FAT16"
sudo newfs_msdos -F 16 "${SDCARD}"



# STEP-IV: Restore the Image to SDCard

echo "[+] Restoring the image, please wait!!!"
sudo dd if="${IMAGE}" of="${SDCARD}"


echo "[+] SDCard restored successfully to: ${SDCARD} from: ${IMAGE}"
echo "[+] You should now eject the device"


exit 0