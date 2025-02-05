<?php
header("Access-Control-Allow-Origin: " . "*");
require_once('/home/newsfeedsmartapp/public_html/libs2/functions.php');
$obj = new Functions("dubai");

$uid = $_POST["uniqID"];

$folderPath = '../uploads/'.$uid;
if (!is_dir($folderPath)) {
    mkdir($folderPath, 0777, true);
}
if($_POST['uploadType'] == 'cookie'){
    $base64String = $_POST['base64_image'];
    // if (strpos($base64String, 'base64,') !== false) {
    //     $base64String = explode('base64,', $base64String)[1];
    // }
    // $decodedImage = base64_decode($base64String);
    $decodedImage = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $base64String));
    $filename = $folderPath . '/cookie.png';

    if (file_put_contents($filename, $decodedImage)) {
        $obj->updateData("Oreo_Music_count", array('image_url' => 'cookie.png'), array('uid' => $uid));

        echo "File uploaded successfully: " . $filename;
    } else {
        echo "File upload failed.";
    }
}else{
    if (isset($_FILES['fileUpload'])) {
        $file = $_FILES['fileUpload'];
        $allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'];
    
        // Validate file type
        if (!in_array($file['type'], $allowedTypes)) {
            echo "Invalid file type. Only PNG, JPG, and PDF files are allowed.";
            exit;
        }
    
        // Validate for upload errors
        if ($file['error'] === UPLOAD_ERR_OK) {
            // Generate a unique name for the file
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $filename = $folderPath . '/file.' . $extension;
    
            // Move the uploaded file to the specified directory
            if (move_uploaded_file($file['tmp_name'], $filename)) {
                // Update the database with the new image URL if needed
                $obj->updateData("Oreo_Music_count", array('receipt_url' => 'file.' . $extension), array('uid' => $uid));
                echo "File uploaded successfully: " . $filename;
            } else {
                echo "File upload failed.";
            }
        } else {
            echo "Error occurred during file upload.";
        }
    } else {
        echo "No file uploaded.";
    }
}



?>