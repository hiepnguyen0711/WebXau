<?php
include 'ajax-config.php';
header('Content-Type: application/json');
// KiemTraLoi();

session_start();
$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['pnvn_token']) && $data['pnvn_token'] == $_SESSION['token']) {
    $ho_ten = addslashes($data['ho_ten']);
    $dien_thoai = addslashes($data['dien_thoai']);
    $dia_chi = addslashes($data['dia_chi']);
    $chuong_trinh_km = isset($data['chuong_trinh_km']) ? implode(', ', $data['chuong_trinh_km']) : '';

    // Lưu vào cơ sở dữ liệu
    $d->reset();
    $d->setTable('#_lienhe');
    $insertData = [
        "ho_ten" => $ho_ten,
        "sdt" => $dien_thoai,
        "dia_chi" => $dia_chi,
        "chuong_trinh_km" => $chuong_trinh_km,
    ];

    if ($d->insert($insertData)) {
        echo json_encode(["status" => "success", "message" => "Thông tin đã được lưu."]);
        token();
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Không thể lưu thông tin."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Token không hợp lệ."]);
}
?>
