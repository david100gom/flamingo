Ext.define('Flamingo.view.oozie.coordinator.CoordinatorDetailPopController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.coordDetailPopController',

    listen: {
        controller: {
            'simpleHdfsDirectoryBrowserController': {
                simpleHdfsClose: 'onWorkflowSimpleHdfsClose'
            }
        }
    },

    onTabChangePop: function (tabPanel, newCard, oldCard, eOpts) {
        var refs = this.getReferences();
        var url;
        var jobName = tabPanel.up('window').jobName;
        var jobId = tabPanel.up('window').jobId;

        switch (newCard.reference) {
            case 'coordDefinition':
                url = CONSTANTS.OOZIE.COORDINATOR.JOB.DEFINITION.SELECT;
                refs.txtDefinitionJobName.setValue(jobName);
                refs.txtDefinitionJobId.setValue(jobId);
                break;
            case 'coordConfiguration':
                url = CONSTANTS.OOZIE.COORDINATOR.JOB.CONFIGURATION.SELECT;
                refs.txtConfJobName.setValue(jobName);
                refs.txtConfJobId.setValue(jobId);
                break;
            case 'coordLog':
                url = CONSTANTS.OOZIE.COORDINATOR.JOB.LOG.SELECT;
                refs.txtLogJobName.setValue(jobName);
                refs.txtLogJobId.setValue(jobId);
                break;
            default:
                break;
        }

        this.onDetailClick(url, jobId, newCard.reference);
    },

    onAfterrender: function(view){
        var refs = this.getReferences();
        var url = CONSTANTS.OOZIE.COORDINATOR.JOB.DEFINITION.SELECT;

        refs.txtDefinitionJobName.setValue(view.jobName);
        refs.txtDefinitionJobId.setValue(view.jobId);


        this.onDetailClick(url, view.jobId, 'coordDefinition');
    },

    onEditorUpdate: function () {
        var refs = this.getReferences();

        if (refs.updateBtn.text == 'Edit') {
            refs.updateBtn.setText('Save As');
            refs.updateBtn.setIconCls('fi icon-fm-save');
            refs.definitionEditor.editor.setReadOnly(false);
            refs.cancelBtn.setHidden(false);
        } else {
            Ext.MessageBox.show({
                title: 'Alert',
                message: '저장 하시겠습니까?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn == 'yes') {
                        Ext.create('FEM.view.filesystem.hdfs.simple.SimpleHdfsDirectoryBrowser').show();
                    }
                }
            });
        }
    },

    onEditorCancel: function () {
        var refs = this.getReferences();
        refs.updateBtn.setText('Edit');
        refs.updateBtn.setIconCls('fi icon-fm-document-edit');
        refs.definitionEditor.editor.setReadOnly(true);
        refs.cancelBtn.setHidden(true);

        this.onAfterrender(this.getView());
    },

    onWorkflowSimpleHdfsClose: function (record) {
        var refs = this.getReferences();

        var params = {
            definition: refs.definitionEditor.getValue(),
            path: record.get('fullyQualifiedPath'),
            checked: false,
            fileName: refs.txtDefinitionJobId.getValue()
        };

        invokeGet(CONSTANTS.OOZIE.WORKFLOW.JOB.DEFINITION.SAVE,
            params,
            function(response){
                var obj = Ext.decode(response.responseText);
                if (obj.success) {
                    refs.updateBtn.setText('Edit');
                    refs.updateBtn.setIconCls('fi icon-fm-document-edit');
                    refs.definitionEditor.editor.setReadOnly(true);
                    Ext.Msg.alert('Confirm', '저장 되었습니다.');
                } else {
                    Ext.MessageBox.show({
                        title: 'Warning',
                        message: '디렉토리에 동일한 파일명이 존재합니다.<br>덮어쓰시겠습니까?',
                        buttons: Ext.Msg.YESNO,
                        icon: Ext.Msg.WARNING,
                        fn: function (btn) {
                            if (btn == 'yes') {
                                params.checked = true;
                                invokeGet(CONSTANTS.OOZIE.WORKFLOW.JOB.DEFINITION.SAVE,
                                    params,
                                    function(response){
                                        refs.updateBtn.setText('Edit');
                                        refs.updateBtn.setIconCls('fi icon-fm-document-edit');
                                        refs.definitionEditor.editor.setReadOnly(true);
                                        Ext.Msg.alert('Confirm', '저장 되었습니다.');
                                    }
                                );
                            }
                        }
                    });
                }

            },
            function(response, opts){
                error(message.msg('common.warning'), format(message.msg('common.failure'), config['system.admin.email']));
            }
        );
    },

    onDetailClick: function (url, jobId, reference) {
        var refs = this.getReferences();
        refs.coordLog.setLoading(true);
        invokeGet(url,
            {jobId: jobId},
            function(response){
                switch (reference) {
                    case 'coordDefinition':
                        refs.definitionEditor.setValue(Ext.decode(response.responseText).map.jobDefinition);
                        break;
                    case 'coordConfiguration':
                        refs.confEditor.setValue(Ext.decode(response.responseText).map.jobConfiguration);
                        break;
                    case 'coordLog':
                        refs.logEditor.setValue(Ext.decode(response.responseText).map.jobLog);
                        break;
                    default:
                        break;
                }
                refs.coordLog.setLoading(false);
            },
            function(response, opts){
                error(message.msg('common.warning'), format(message.msg('common.failure'), config['system.admin.email']));
            }
        );
    }

});
