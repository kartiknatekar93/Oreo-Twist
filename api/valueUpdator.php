<?php
header("Access-Control-Allow-Origin: " . "*");
require_once ('/home/newsfeedsmartapp/public_html/libs2/functions.php');






    $obj = new Functions("dubai");



    $uid = $_POST["uniqID"];



	$dataObj = $obj->htmlEncode($_POST["data"]);

	

$query = $obj->myPdo->from('Oreo_Music_count')->select(array('encryptkey'))->where('uid', $uid);



$res  = $query->fetch();



$key = $res['encryptkey'];



$dataAr=explode(".",$dataObj);



$hader=$dataAr[0];



$pay=$dataAr[1];



$sig=$dataAr[2];



$my_sig = hash_hmac('sha256', $hader.".".$pay, $key);



$hed=base64_decode($hader);



$decode_pay=json_decode(base64_decode($dataAr[1]),true);



if($decode_pay["t"]==$hed){



    $r2 = $sig[0];



	$r1 = $sig[1];



	$x=substr($sig,2);



	$a_sig = substr($x,0,$r1).substr($x,$r1+$r2);



	$my_sig=base64_encode(hash_hmac('sha256', $hader.".".$pay, $key));



	if($my_sig==$a_sig){



        $array_str = base64_decode($pay);



        $json = json_decode($array_str,true);

	

        if($uid==$json["uid"]){



            $out["code"]=200;



            $out["uid"]=$json["uid"];



            $out["score"]=$json["score"];



        }



    }



}



  
$obj->clickUpdater("Oreo_Music_count", $json["uniqID"],$json["saveType"]);
	


?>