<?php
?>
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Phương Thức Vận Chuyển
        </h1>
        <ol class="breadcrumb">
            <li><a href="<?= urladmin ?>"><i class="fa fa-dashboard"></i> Trang chủ</a></li>
            <li><a href="#">Quản lý bán hàng</a></li>
            <li class="active">Phương Thức Vận Chuyển</li>
        </ol>
    </section>
    <!-- Main content -->
    <section class="content">
        <div class="box box-primary">
            <div class="box-header with-border" style="padding-left: 15px;padding-right: 15px;">
                <div class="row m-5">
                    <div class="col-sm-12 p5 text-right">
                        <?php if ($d->checkPermission_edit($id_module) == 1) { ?>
                            <a href="index.php?p=<?= $_GET['p'] ?>&a=add" class="btn btn-primary"><i class="glyphicon glyphicon-plus"></i> Thêm mới</a>
                        <?php } ?>
                    </div>
                </div>
            </div>
            <div class="box-body">

                <table class="table table-bordered table-striped table-primary table-hover" id="dataTable1">
                    <thead>
                        <tr>
                            <th style="width: 70px">STT</th>
                            <th>Tên</th>
                            <th>Giá tiền</th>
                            <th style="width: 120px">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($items as $key => $value) {
                        ?>
                            <tr>
                                <td class="text-center"><?= $key + 1 ?></td>
                                <td><?= $value['ten'] ?></td>
                                <td class="text-center"><b><?= number_format($value['gia']) ?> <sup>đ</sup></b></td>

                                <td class="text-center">
                                    <a class="btn btn-xs btn-info" href="index.php?p=<?= $_GET['p'] ?>&a=edit&id=<?= $value['id'] ?>" title="Sửa">Chi tiết</a>
                                    <?php if ($d->checkPermission_dele($id_module) == 1) { ?>
                                        <a href="index.php?p=<?= $_GET['p'] ?>&a=delete&id=<?= $value['id'] ?>" onClick="if(!confirm('Xác nhận xóa?')) return false;" class="btn btn-xs btn-danger" title="Xóa">Xóa</a>
                                    <?php } ?>
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
        'autoWidth': false,
        'searching': true,
        'lengthChange': true,
        "iDisplayLength": 25
    });
</script>