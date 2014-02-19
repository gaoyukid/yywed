<?php
include_once("../ConnectionManager.php");
header('Content-type:text/javascript;charset=UTF-8');

$json=json_decode(stripslashes($_POST["_gt_json"]));
//$pageNo = $json->{'pageInfo'}->{'pageNum'};

$conManager = new ConManager();
$conManager->getConnection();

$handle = mysql_query("set names utf8");


if($json->{'action'} == 'load'){
  $sql = "select * from procurement";
  $handle = mysql_query($sql);
		
  $retArray = array();
  while ($row = mysql_fetch_object($handle)) {
    $retArray[] = $row;
  }
  $data = json_encode($retArray);
  $ret = "{data:" . $data .",\n";
  $ret .= "recordType : 'object'}";
  echo $ret;

}else if($json->{'action'} == 'save'){
  $sql = "";
  $params = array();
  $errors = "";
  $ret = "";
  //deal with those deleted
  $deletedRecords = $json->{'deletedRecords'};
  foreach ($deletedRecords as $value){
    $params[] = $value->order_no;
  }
  
  if(count($params) > 0)
  {
	$sql = "delete from procurement where order_no in (" . join(",", $params) . ")";
	if(mysql_query($sql)==FALSE){
		$errors .= mysql_error();
	}
  } 
  
  //deal with those updated
  $sql = "";
  $updatedRecords = $json->{'updatedRecords'};
  foreach ($updatedRecords as $value){
    $sql = "update procurement set ".
      "name='".$value->name . "', ".
      "quantity=".$value->quantity . ", ".
      "in_stock=".$value->in_stock . ", ".
      "misc='".$value->misc . "', ".
      "delivery_date='".$value->delivery_date . "' ".
      "where order_no=".$value->order_no;
      if(mysql_query($sql)==FALSE){
        $errors .= mysql_error();
      }
  }

  //deal with those inserted
  $sql = "";
  $insertedRecords = $json->{'insertedRecords'};
  foreach ($insertedRecords as $value){
    $sql = "insert into procurement (`name`, `quantity`, `in_stock`, `misc`,`delivery_date`) VALUES ('".
      $value->name."', '".$value->quantity."', '".$value->in_stock."', '".$value->misc."',  '".$value->delivery_date."')";
    if(mysql_query($sql)==FALSE){
      $errors .= mysql_error();
    }
  }
  
	
  $ret = "{success : true,exception: ''}";
  echo $ret;
}

?>