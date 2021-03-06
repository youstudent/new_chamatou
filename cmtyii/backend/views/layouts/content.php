<?php
use yii\widgets\Breadcrumbs;
use dmstr\widgets\Alert;

?>
<div class="content-wrapper" style="background-color: #f1f1f1">
    <section class="content-header">

    </section>
    <section class="content" style="margin-top: -28px;">
        <?= Alert::widget() ?>
        <?= $content ?>
    </section>
</div>
<!---->
<!--<footer class="main-footer">-->
<!--    <div class="pull-right hidden-xs">-->
<!--        <b>Version</b> 2.0-->
<!--    </div>-->
<!--    <strong>Copyright &copy; 2014-2015 <a href="http://almsaeedstudio.com">Almsaeed Studio</a>.</strong> All rights-->
<!--    reserved.-->
<!--</footer>-->

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
    <!-- Create the tabs -->
    <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
            <h3 class="control-sidebar-heading">Recent Activity</h3>
            <ul class='control-sidebar-menu'>
                <li>
                    <a href='javascript::;'>
                        <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                        <div class="menu-info">
                            <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                            <p>Will be 23 on April 24th</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='javascript::;'>
                        <i class="menu-icon fa fa-user bg-yellow"></i>

                        <div class="menu-info">
                            <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>

                            <p>New phone +1(800)555-1234</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='javascript::;'>
                        <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                        <div class="menu-info">
                            <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

                            <p>nora@example.com</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='javascript::;'>
                        <i class="menu-icon fa fa-file-code-o bg-green"></i>

                        <div class="menu-info">
                            <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                            <p>Execution time 5 seconds</p>
                        </div>
                    </a>
                </li>
            </ul>
            <!-- /.control-sidebar-menu -->

            <h3 class="control-sidebar-heading">Tasks Progress</h3>
            <ul class='control-sidebar-menu'>
                <li>
                    <a href='javascript::;'>
                        <h4 class="control-sidebar-subheading">
                            Custom Template Design
                            <span class="label label-danger pull-right">70%</span>
                        </h4>

                        <div class="progress progress-xxs">
                            <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='javascript::;'>
                        <h4 class="control-sidebar-subheading">
                            Update Resume
                            <span class="label label-success pull-right">95%</span>
                        </h4>

                        <div class="progress progress-xxs">
                            <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='javascript::;'>
                        <h4 class="control-sidebar-subheading">
                            Laravel Integration
                            <span class="label label-waring pull-right">50%</span>
                        </h4>

                        <div class="progress progress-xxs">
                            <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href='javascript::;'>
                        <h4 class="control-sidebar-subheading">
                            Back End Framework
                            <span class="label label-primary pull-right">68%</span>
                        </h4>

                        <div class="progress progress-xxs">
                            <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                        </div>
                    </a>
                </li>
            </ul>
            <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->

        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
            <form method="post">
                <h3 class="control-sidebar-heading">General Settings</h3>

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                        Report panel usage
                        <input type="checkbox" class="pull-right" checked/>
                    </label>

                    <p>
                        Some information about this general settings option
                    </p>
                </div>
                <!-- /.form-group -->

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                        Allow mail redirect
                        <input type="checkbox" class="pull-right" checked/>
                    </label>

                    <p>
                        Other sets of options are available
                    </p>
                </div>
                <!-- /.form-group -->

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                        Expose author name in posts
                        <input type="checkbox" class="pull-right" checked/>
                    </label>

                    <p>
                        Allow the user to show his name in blog posts
                    </p>
                </div>
                <!-- /.form-group -->

                <h3 class="control-sidebar-heading">Chat Settings</h3>

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                        Show me as online
                        <input type="checkbox" class="pull-right" checked/>
                    </label>
                </div>
                <!-- /.form-group -->

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                        Turn off notifications
                        <input type="checkbox" class="pull-right"/>
                    </label>
                </div>
                <!-- /.form-group -->

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                        Delete chat history
                        <a href="javascript::;" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
                    </label>
                </div>
                <!-- /.form-group -->
            </form>
        </div>
        <!-- /.tab-pane -->
    </div>
</aside><!-- /.control-sidebar -->
<!-- Add the sidebar's background. This div must be placed
     immediately after the control sidebar -->
<div class='control-sidebar-bg'></div>



<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">

        </div>
    </div>
</div>

<link rel="stylesheet" href="js/sweetalert-master/dist/sweetalert.css">
<script src="js/sweetalert-master/dist/sweetalert.min.js"></script>
<script>
    /**
     * 弹出一个确认输入框
     * @param title
     * @param text
     * @param url
     * @param nullTrue
     */
    function alertInput(title, text, url, nullTrue=false) {
        swal({
                title: title,
                text: text,
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                confirmButtonText:"确认",
                cancelButtonText:"取消",
                animation: "slide-from-top",
                inputPlaceholder: text,
                showLoaderOnConfirm: true,
            },
            function(inputValue){
                if (inputValue === false) return false;

                if (inputValue === "") {
                    if(nullTrue === true){
                        swal.showInputError("请输入值!");
                        return false
                    }
                }
                $.ajax({
                    type: "GET",
                    url: url,
                    data: {inputValue: inputValue},
                    dataType: "json",
                    success: function (data) {
                        if (data.code === 1) {
                            swal({
                                    title: "成功",
                                    text: data.message,
                                    type: "success",
                                    showCancelButton: false,
                                    closeOnConfirm: false,
                                    showLoaderOnConfirm: true,
                                },
                                function () {
                                    window.location.reload();
                                });
                        }else{
                            swal({
                                    title: "失败",
                                    text: data.message,
                                    type: "error",
                                    showCancelButton: false,
                                    closeOnConfirm: false,
                                    showLoaderOnConfirm: true,
                                },
                                function () {
                                    window.location.reload();
                                });
                        }
                    }
                });
            });
    }
    window.onload = function () {
        $('body').on('hidden.bs.modal', '.modal', function () {
            $(this).find('.modal-content').empty();
            $(this).removeData('bs.modal');

//            $(this).find('.modal-dialog').empty();

        });
    }

    /**
     * 弹出确认
     * @param title
     * @param text
     * @param url
     */
    function alertWarning(title, text, url) {
        swal({
                title: title,
                text: text,
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: false,
                showLoaderOnConfirm: true,
                confirmButtonText:"确认",
                cancelButtonText:"取消"
            },
            function(){
                $.ajax({
                    type: "GET",
                    url: url,
                    dataType: "json",
                    success: function (data) {
                        if (data.code === 1) {
                            swal("成功!", data.message, "success");
                            setTimeout(function(){
                                window.location.reload();
                            },1000)
                        } else {
                            swal("失败", data.message, "error");
                        }
                    }
                });
            });
    }
</script>

<style>
    .grid-view th{
        text-align: center;
        font-size: 14px;
    }
    .grid-view td{
        text-align: center;
        font-size: 13px;
    }

    .grid-view{
        padding: 5px;
    }
</style>

<style media="screen">
    .C_msgBox{
        background-color: #fff;
        width: 80%;
        margin: 15px auto 0;
        box-shadow: 0 0 6px #666;
        border-radius: 5px;
        margin-top:50px;
    }
    .C_titleBox{
        height: 50px;
        line-height: 50px;
        margin:0;
        padding-left: 30px;
        background-color: #dd4b39;
        color: #fff;
    }
    .C_Row:nth-child(odd){background-color: #fff}
    .C_Row:nth-child(even){background-color: #ecf0f5}
    .C_Row{
        width: 100%;
        display: flex;
        border-top:dotted 2px #ccc;
        height:50px;
        justify-content: space-around;
        align-items: center;
        padding: 5px 0;
    }
    .C_Row span,.C_Row input{
        width: 30%;
        height: 40px;
        display: block;
        line-height: 40px;
        text-align: center;
    }
    .C_Row span i{
        float: left;
    }
    .global_borLeft{
        background-color: #dd4b39;
        display: inline-block;
        height: 40px;
        width: 5px;
        border-radius: 3px;
    }



    /*      input的内向阴影      */
    .global_IptSad{
        border-radius: 0.16rem;
        -webkit-box-shadow: 0 5px 5px -4px #d6d6d6 inset;
        -moz-box-shadow: 0 5px 5px -4px #d6d6d6 inset;
        -o-box-shadow: 0 5px 5px -4px #d6d6d6 inset;
        -ms-box-shadow: 0 5px 5px -4px #d6d6d6 inset;
        box-shadow: 0 5px 5px -4px #d6d6d6 inset;
        background-color: rgba(238, 238, 238, 0.9);
        border: solid 1px #ccc;
        background-color: #fff;
    }

</style>
