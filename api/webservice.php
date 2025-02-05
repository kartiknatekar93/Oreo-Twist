<?php
header("Access-Control-Allow-Origin: " . "*");
require_once('/home/newsfeedsmartapp/public_html/libs2/functions.php');
$obj = new Functions("dubai");


$uid = $_POST["uniqID"];
$dataObj = $obj->htmlEncode($_POST["data"]);

$query = $obj->myPdo->from('Oreo_Music_count')->select(array('encryptkey'))->where('uid', $uid);
$res = $query->fetch();
$key = $res['encryptkey'];
$dataAr = explode(".", $dataObj);
$hader = $dataAr[0];
$pay = $dataAr[1];
$sig = $dataAr[2];
$my_sig = hash_hmac('sha256', $hader . "." . $pay, $key);
$hed = base64_decode($hader);
$decode_pay = json_decode(base64_decode($dataAr[1]), true);

if ($decode_pay["t"] == $hed) {
    $r2 = $sig[0];
    $r1 = $sig[1];
    $x = substr($sig, 2);
    $a_sig = substr($x, 0, $r1) . substr($x, $r1 + $r2);
    $my_sig = base64_encode(hash_hmac('sha256', $hader . "." . $pay, $key));

    if ($my_sig == $a_sig) {
        $array_str = base64_decode($pay);
        $json = json_decode($array_str, true);
        if ($uid == $json["uid"]) {
            $out["code"] = 200;
            $out["uid"] = $json["uid"];
            $out["score"] = $json["score"];
        }
    }
}

$action = $json["saveType"];

switch ($action) {
    case "saveLanguage":
        if (!isset($json["language"]) || $json["language"]==NULL) {
            exit(json_encode(['code' => 403, 'message' => 'The language field is required.', 'error_key' => 1]));
        }

        $data = array("language" => $json["language"]);
        $res = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));

        if($res['code']==200) {
            exit(json_encode(['code' => 200, 'message' => 'Data saved']));
        } else {
            exit(json_encode(['code' => 400, 'message' => 'Data not saved']));
        }
        break;
    case "saveDrawTime":
        $data = array("drawTime" => $json["drawTime"]);
        $res = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));
        break;
    case "saveConversionTime":
        $data = array("conversionTime" => $json["conversionTime"]);
        $res = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));
        break;
    case "saveCountry":
        if (!isset($json["country"]) || $json["country"]==NULL) {
            exit(json_encode(['code' => 403, 'message' => 'The country field is required.', 'error_key' => 2]));
        }

        $data = array("country" => $json["country"]);
        $res = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));

        if($res['code']==200) {
            exit(json_encode(['code' => 200, 'message' => 'Data saved']));
        } else {
            exit(json_encode(['code' => 400, 'message' => 'Data not saved']));
        }
        break;

    case "formData":
        $uid = $json['uniqID'];
        $name = $json['name'];
        $email = $json['email'];
        $country = $json['country'];
        $mobile = $json['mobile'];
        $uniqueCode = strtoupper($json['uniqueCode']);

        $utm_term = $json['utm_term'];
        $utm_medium = $json['utm_medium'];
        $utm_source = $json['utm_source'];
        $utm_content = $json['utm_content'];
        $hubspotutk = $json['htk'];
        $ga_cid = $json['ga_cid'];
        $tc = $json['tc'];

        if (!isset($name) || $name==NULL) {
            exit(json_encode(['code' => 403, 'message' => 'The name field is required.', 'error_key' => 3]));
        }

        if (!isset($email) || $email==NULL) {
            exit(json_encode(['code' => 403, 'message' => 'The email field is required.', 'error_key' => 4]));
        } else if (!$obj->isEmail($email)) {
            exit(json_encode(['code' => 403, 'message' => 'The email field is not in valid format.', 'error_key' => 5]));
        }

        if (!isset($mobile) || $mobile==NULL) {
            exit(json_encode(['code' => 403, 'message' => 'The mobile field is required.', 'error_key' => 6]));
        }

        if (!isset($country) || $country==NULL) {
            exit(json_encode(['code' => 403, 'message' => 'The country field is required.', 'error_key' => 7]));
        }

        if ($country!='ksa') {
            if (!isset($uniqueCode) || $uniqueCode==NULL) {
                exit(json_encode(['code' => 403, 'message' => 'The uniqueCode field is required.', 'error_key' => 8]));
            } else if(strlen($uniqueCode) != 8) {
                exit(json_encode(['code' => 403, 'message' => 'The uniqueCode field is not in valid format.', 'error_key' => 9]));
            }
        
            $cp = substr($uniqueCode, 0, 2);
        
            if($cp=='M2') {
                $cp_table = 'Oreo_Music_12';
            } else if ($cp=='M4') {
                $cp_table = 'Oreo_Music_24';
            }  else {
                exit(json_encode(['code' => 403, 'coupon' => 'Invalid', 'error_key' => 10]));
            }
        }

        $dt = date("Y-m-d H:i:s");

        $data = array(
            "uid" => $uid,
            "name" => $name, 
            "email" => $email, 
            "country" => $country,
            "mobile" => $mobile, 
            "uniqueCode" => $uniqueCode,
            "coupon_type" => 0,
            "coupon_date" => $dt,
            "utm_term" => $utm_term,
            "utm_medium" => $utm_medium,
            "utm_source" => $utm_source,
            "utm_content" => $utm_content,
            "hubspotutk" => $hubspotutk,
            "ga_cid" => $ga_cid,
            "tc" => $tc,
            "source" => $utm_source
        );

        if($country=='ksa') {
            unset($data['uniqueCode']);
        }

        if ($country!='ksa') {
            $check_cp = $obj->myPdo->from($cp_table)
                    ->where('couponCode', $uniqueCode)
                    ->where('status', 0)
                    ->fetch();

            if($check_cp) {
                $res_update = $obj->updateData($cp_table, array('status' => 1, 'coupon_date' => $dt), array('id' => $check_cp['id']));

                if($res_update['code']==200) {
                    $data['coupon_type'] = 1;
                    $res1 = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));

                    $res = $obj->saveData("Oreo_Music_data", $data);
                    if($res['code']==200) {
                        exit(json_encode(['code' => 200, 'message' => 'User registered successfully', 'coupon' => 'Valid']));
                    }
                } else {
                    exit(json_encode(['code' => 200, 'message' => 'Something went wrong', 'coupon' => 'Invalid']));
                }
                
            } else {
                $data['coupon_type'] = 2;
                $res1 = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));
                $res = $obj->saveData("Oreo_Music_data", $data);
                if($res['code']==200) {
                    exit(json_encode(['code' => 200, 'message' => 'User registered successfully', 'coupon' => 'Invalid']));
                } else {
                    exit(json_encode(['code' => 200, 'message' => 'Something went wrong', 'coupon' => 'Invalid']));
                }
            }
        } else if($country=='ksa') {
            $res1 = $obj->updateData("Oreo_Music_count", $data, array('uid' => $uid));
            $res = $obj->saveData("Oreo_Music_data", $data);
            if($res['code']==200) {
                exit(json_encode(['code' => 200, 'message' => 'User registered successfully']));
            } else {
                exit(json_encode(['code' => 200, 'message' => 'Something went wrong']));
            }
        }

        break;
}
