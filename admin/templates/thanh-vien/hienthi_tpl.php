<?php
?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Quản lý thành viên
      </h1>
      <ol class="breadcrumb">
        <li><a href="<?=urladmin?>"><i class="fa fa-dashboard"></i> Trang chủ</a></li>
        <li><a href="#">Quản lý khách hàng</a></li>
        <li class="active">Thành viên</li>
      </ol>
    </section>
    <!-- Main content -->
    <section class="content">
        <div class="box box-primary">
            <div class="box-body">
                
                <table class="table table-bordered table-striped table-primary table-hover" id="dataTable1">
                    <thead>
                        <tr>
                            <th style="width: 70px">Mã</th>
                            <th>Họ tên</th>
                            <th>Email</th>
                            <th>Điện thoại</th>
                            <th>Đơn hàng</th>
                            <th style="width: 100px">Trạng thái</th>
                            <th style="width: 120px">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($items as $key => $value) {
                        ?>
                        <tr>
                            <td><?=$value['ma_thanhvien']?></td>
                            <td><?=$value['ho_ten']?></td>
                            <td ><?=$value['email']?></td>
                            <td><?=$value['dien_thoai']?></td>
                            <td>
                                
                            </td>
                            <td class="text-center">
                                <input class="chk_box" <?php if($d->checkPermission_edit($id_module)==0){ ?>disabled<?php }?> type="checkbox" onclick="on_check(this,'#_thanhvien','trang_thai','<?=$value['id']?>')" <?php if($value['trang_thai'] == 1) echo 'checked="checked"'; ?>>
                            </td>
                            <td class="text-center">
                                <a class="btn btn-xs btn-info" href="index.php?p=<?=$_GET['p']?>&a=edit&id=<?=$value['id']?>"  title="Sửa">Chi tiết</a>
                                <?php if($d->checkPermission_dele($id_module)==1){ ?>
                                <a href="index.php?p=<?=$_GET['p']?>&a=delete&id=<?=$value['id']?>" onClick="if(!confirm('Xác nhận xóa?')) return false;" class="btn btn-xs btn-danger" title="Xóa">Xóa</a>
                                <?php }?>
                            </td>
                        </tr>
                        <?php } ?>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</div>
<link rel="stylesheet" href="templates/plugin/datatables.net-bs/css/dataTables.bootstrap.min.css">
<!-- DataTables -->
<script src="public/plugin/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="public/plugin/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script>
    $('#dataTable1').DataTable({
        'autoWidth'   : false,
        'searching'   : true,
        'lengthChange': true,
        "iDisplayLength": 25
    });
</script>