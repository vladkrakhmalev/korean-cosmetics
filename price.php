<?php

function parse_excel_file( $filename ){

	require_once $_SERVER['DOCUMENT_ROOT'].'/php/PHPExcel-1.8/Classes/PHPExcel.php';
	$result = array();
	$file_type = PHPExcel_IOFactory::identify( $filename );
	$objReader = PHPExcel_IOFactory::createReader( $file_type );
	$objPHPExcel = $objReader->load( $filename );
	$result = $objPHPExcel->getActiveSheet()->toArray();

	return $result;
}

$res = parse_excel_file($_SERVER['DOCUMENT_ROOT'].'/assets/price.xlsx' );
echo json_encode(array('data' => $res));