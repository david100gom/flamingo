/*
 * Copyright 2012-2016 the Flamingo Community.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sqoop Export View
 *
 * @class
 * @extends Flamingo.view.workflowdesigner.property.HADOOP_SQOOP_EXPORT
 * @author <a href="mailto:chiwanpark@icloud.com">Chiwan Park</a>
 */
Ext.define('Flamingo.view.workflowdesigner.property.HADOOP_SQOOP_EXPORT', {
    extend: 'Flamingo.view.workflowdesigner.property._NODE_HADOOP',
    alias: 'widget.HADOOP_SQOOP_EXPORT',

    requires: [
        'Flamingo.view.workflowdesigner.property._BrowserField'
    ],

    width: 500,
    height: 300,

    items: [
        {
            title: 'Source (HDFS)',
            xtype: 'form',
            border: false,
            autoScroll: true,
            defaults: {
                anchor: '100%',
                labelWidth: 100
            },
            defaultType: 'textfield',
            items: [
                {
                    fieldLabel: 'HDFS Path',
                    name: 'output',
                    xtype: '_browserField'
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Field Delimiter',
                    flex: 1,
                    items: [
                        {
                            xtype: 'combo',
                            name: 'fieldDelimiter',
                            value: ',',
                            flex: 1,
                            forceSelection: true,
                            multiSelect: false,
                            editable: false,
                            readOnly: this.readOnly,
                            displayField: 'name',
                            valueField: 'value',
                            mode: 'local',
                            queryMode: 'local',
                            triggerAction: 'all',
                            tpl: '<tpl for="."><div class="x-boundlist-item" data-qtip="{description}">{name}</div></tpl>',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['name', 'value', 'description'],
                                data: [
                                    {
                                        name: 'Double Colon',
                                        value: '::',
                                        description: '::'
                                    },
                                    {
                                        name: 'Comma',
                                        value: ',',
                                        description: ','
                                    },
                                    {name: 'Pipe', value: '|', description: '|'},
                                    {
                                        name: 'Tab',
                                        value: '\'\\t\'',
                                        description: '\'\\t\''
                                    },
                                    {
                                        name: 'Blank',
                                        value: '\'\\s\'',
                                        description: '\'\\s\''
                                    },
                                    {
                                        name: 'User Defined',
                                        value: 'CUSTOM',
                                        description: 'User Defined'
                                    }
                                ]
                            }),
                            listeners: {
                                change: function (combo, newValue, oldValue, eOpts) {
                                    // 콤보 값에 따라 관련 textfield 를 enable | disable 처리한다.
                                    var customValueField = combo.nextSibling('textfield');
                                    if (newValue === 'CUSTOM') {
                                        customValueField.enable();
                                        customValueField.isValid();
                                    } else {
                                        customValueField.disable();
                                        if (newValue) {
                                            customValueField.setValue(newValue);
                                        } else {
                                            customValueField.setValue(',');
                                        }
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            name: 'fieldDelimiterValue',
                            flex: 1,
                            disabled: true,
                            readOnly: this.readOnly,
                            allowBlank: false,
                            value: ','
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: 'hbox',
                    fieldLabel: 'Line Delimiter',
                    flex: 1,
                    items: [
                        {
                            xtype: 'combo',
                            name: 'lineDelimiter',
                            value: '\\n',
                            flex: 1,
                            forceSelection: true,
                            multiSelect: false,
                            editable: false,
                            readOnly: this.readOnly,
                            displayField: 'name',
                            valueField: 'value',
                            mode: 'local',
                            queryMode: 'local',
                            triggerAction: 'all',
                            tpl: '<tpl for="."><div class="x-boundlist-item" data-qtip="{description}">{name}</div></tpl>',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['name', 'value', 'description'],
                                data: [
                                    {
                                        name: 'Double Colon',
                                        value: '::',
                                        description: '::'
                                    },
                                    {
                                        name: 'Comma',
                                        value: ',',
                                        description: ','
                                    },
                                    {name: 'Pipe', value: '|', description: '|'},
                                    {
                                        name: 'Tab',
                                        value: '\'\\t\'',
                                        description: '\'\\t\''
                                    },
                                    {
                                        name: 'Blank',
                                        value: '\'\\s\'',
                                        description: '\'\\s\''
                                    },
                                    {
                                        name: 'User Defined',
                                        value: 'CUSTOM',
                                        description: 'User Defined'
                                    }
                                ]
                            }),
                            listeners: {
                                change: function (combo, newValue, oldValue, eOpts) {
                                    // 콤보 값에 따라 관련 textfield 를 enable | disable 처리한다.
                                    var customValueField = combo.nextSibling('textfield');
                                    if (newValue === 'CUSTOM') {
                                        customValueField.enable();
                                        customValueField.isValid();
                                    } else {
                                        customValueField.disable();
                                        if (newValue) {
                                            customValueField.setValue(newValue);
                                        } else {
                                            customValueField.setValue('\\n');
                                        }
                                    }
                                }
                            }
                        },
                        {
                            xtype: 'textfield',
                            name: 'lineDelimiterValue',
                            flex: 1,
                            disabled: true,
                            readOnly: this.readOnly,
                            allowBlank: false,
                            value: '\\n'
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'form',
            title: 'Destination (Database)',
            border: false,
            autoScroll: true,
            defaults: {
                anchor: '100%',
                labelWidth: 100
            },
            defaultType: 'textfield',
            items: [
                {
                    name: 'jdbcUrl',
                    fieldLabel: 'JDBC URI'
                },
                {
                    name: 'jdbcDriver',
                    fieldLabel: 'JDBC Driver'
                },
                {
                    name: 'sqoopUsername',
                    fieldLabel: 'Username'
                },
                {
                    name: 'sqoopPassword',
                    inputType: 'password',
                    fieldLabel: 'Password'
                },
                {
                    name: 'sqoopTable',
                    fieldLabel: 'JDBC Table'
                }
            ]
        },
        {
            title: 'References',
            xtype: 'form',
            border: false,
            autoScroll: true,
            defaults: {
                labelWidth: 100
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'displayfield',
                    height: 20,
                    value: '<a href="http://sqoop.apache.org/docs/1.4.6/SqoopUserGuide.html" target="_blank">Sqoop User Guide</a>'
                },
                {
                    xtype: 'displayfield',
                    height: 20,
                    value: '<a href="http://sqoop.apache.org/docs/1.4.6/SqoopDevGuide.html" target="_blank">Sqoop Developer Guide</a>'
                },
                {
                    xtype: 'displayfield',
                    height: 20,
                    value: '<a href="http://sqoop.apache.org/docs/1.4.6/api/index.html" target="_blank">Sqoop API</a>'
                }
            ]
        }
    ]
});