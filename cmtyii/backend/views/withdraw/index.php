<?php

use kartik\daterange\DateRangePicker;
use yii\helpers\Html;
use common\widgets\GridViewLrdouble;

/* @var $this yii\web\View */
/* @var $searchModel backend\models\search\WithdrawSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = Yii::t('app', 'Withdraws');

?>

<div class="withdraw-index" style="background-color: #FFFFFF;padding: 5px; margin-top: 15px;overflow: hidden;">
    <div class="container-fluid" style="
        margin-left: -15px;
        background-color: #FFFFFF;
        margin-right: -15px;
        min-height: 49px;
        border-bottom: 1px solid #d6d6d6;
        margin-bottom: 15px;
    ">
        <div class="col-sm-3">
            <span style="line-height: 50px; font-weight: 700;font-size: 14px;margin-right: 5px;"><?=$this->title?></span>
            <a href="javascript:void(0)" onclick="location.reload()" class="btn btn-default btn-xs"><span class="glyphicon glyphicon-refresh"></span></a>
        </div>
        <div class="col-sm-9">
            
        </div>
    </div>
    <?= GridViewLrdouble::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],
            [
                'attribute' => 'add_time',
                'format' => 'datetime',
                'filter' => DateRangePicker::widget([
                    'model' => $searchModel,
                    'attribute' => 'add_time',
                    'convertFormat' => true,
                    'pluginOptions' => [
                        'locale' => ['format' => 'Y-m-d'],
                    ],
                ]),
            ],
            'amount',
            [
                'label' => '店铺名称',
                'attribute' => 'store_sp_name',
                'format'=>'raw',
                'value'=>function($model){
                    return "<div style=' width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;'>".$model['store']['sp_name']."</div>";
                }

            ],
            [
                'label' => '联系电话',
                'attribute' => 'shoper_phone',
                'value' => 'shoper.phone'
            ],
            [
                'label' => '开户行',
                'attribute' => 'shoper_bank',
                'value' => 'shoper.bank'
            ],
            [
                'label' => '开户人',
                'attribute' => 'shoper_bank_user',
                'value' => 'shoper.bank_user'
            ],
            [
                'label' => '卡号',
                'attribute' => 'shoper_card_no',
                'value' => 'shoper.card_no'
            ],
            [
                'attribute' => 'status',
                'format'=>'raw',
                'value' => function ($model) {
                    switch ($model->status) {
                        case 0:
                            return "<b class='badge' style='background-color: #367fa9' >待审核</b>";
                        case 1:
                            return "<b class='badge' style='background-color: #008d4c' >已打款</b>";
                        case 2:
                            return "<b class='badge' style='background-color: #dd4b39' >已拒绝</b>";
                    }
                },
                'filter' => [
                    0 => '待审核',
                    1 => '已打款',
                    2 => '已拒绝',
                ]
            ],
            [
                'label' => '备注',
                'attribute' => 'note',
                'format'=>'raw',
                'value' => function($model){
                    return "<div style='width:100px;overflow: hidden'>".$model->note."</div>";
                }
            ],
            [
                'header'=>'操作',
                'class' => 'yii\grid\ActionColumn',
                'template' => "{note}{via}{refuse}",
                'buttons' => [
                        'via' => function($url, $model, $key){
                            if($model->status == 0){
                                $options = [
                                    'title' => Yii::t('app', '打款'),
                                    'aria-label' => Yii::t('app', 'access'),
                                    'data-pjax' => '0',
                                ];
                                return "<a href='#' class='btn btn-xs btn-default' style='margin-right: 5px;' onclick=\"alertInput('确认打款','请输入打款备注！','$url',true)\"> 打款</a>";
                            }
                        },
                        'refuse' => function($url, $model, $key){
                            if($model->status == 0){
                                $options = [
                                    'title' => Yii::t('app', '拒绝'),
                                    'aria-label' => Yii::t('app', 'access'),
                                    'data-pjax' => '0',
                                ];
                                return "<a href='#' class='btn btn-xs btn-default' style='margin-right: 5px;' onclick=\"alertInput('确认拒绝','请输入拒绝原因！','$url',true)\"> 拒绝</a>";
                            }
                        },
                    'note' => function($url, $model, $key){
                        if($model->status !== 0){
                            $options = [
                                'title' => Yii::t('app', '查看详情备注'),
                                'aria-label' => Yii::t('app', 'access'),
                                'data-pjax' => '0',
                            ];
                            return "<a href='".\yii\helpers\Url::to(['withdraw/note','id'=>$model->Id])."' class='btn btn-xs btn-default' data-toggle='modal' data-target='#myModal' > 查看备注</a>";
                        }
                    }
                ]

            ],
        ],
    ]); ?>
    <style>
        .grid-view th{
            text-align: center;
        }
        .grid-view .form-control{
            height: 28px;
        }
    </style>

</div>
<style>
	.grid-view .form-control{
		height: 35px!important;
	}
	.badge{
		font-weight: 500;
	}
	th{
		color: #3c8dbc;
	}
</style>