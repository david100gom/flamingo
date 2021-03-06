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
var CONSTANTS                           = {};
CONSTANTS.CONTEXT_PATH                  = '';
CONSTANTS.FS                            = {};
CONSTANTS.DESIGNER                      = {};
CONSTANTS.DESIGNER.TREE                 = {};
CONSTANTS.OOZIE                         = {};
CONSTANTS.OOZIE.WORKFLOW                = {};
CONSTANTS.OOZIE.WORKFLOW.TREE           = {};

CONSTANTS.DESIGNER.TREE.GET             = '/tree/get.json';
CONSTANTS.DESIGNER.LOAD                 = "/oozie/workflow/load.json";

///////////////////////////////////////
// File System > HDFS
///////////////////////////////////////

CONSTANTS.FS.HDFS_GET_DIRECTORY                 = '/fs/hdfs/directory.json';
CONSTANTS.FS.HDFS_GET_FILE                      = '/fs/hdfs/file.json';
CONSTANTS.FS.HDFS_GET_LIST                      = '/fs/hdfs/list.json';
CONSTANTS.FS.HDFS_GET_TOPN                      = '/fs/hdfs/topN.json';
CONSTANTS.FS.HDFS_CREATE_DIRECTORY              = '/fs/hdfs/createDirectory.json';
CONSTANTS.FS.HDFS_DELETE_DIRECTORY              = '/fs/hdfs/deleteDirectory.json';
CONSTANTS.FS.HDFS_RENAME_DIRECTORY              = '/fs/hdfs/renameDirectory.json';
CONSTANTS.FS.HDFS_MOVE_DIRECTORY                = '/fs/hdfs/moveDirectory.json';
CONSTANTS.FS.HDFS_COPY_DIRECTORY                = '/fs/hdfs/copyDirectory.json';
CONSTANTS.FS.HDFS_GET_DIRECTORY_INFO            = '/fs/hdfs/getDirectoryInfo.json';
CONSTANTS.FS.HDFS_UPLOAD_FILE                   = '/fs/hdfs/upload.json';
CONSTANTS.FS.HDFS_DOWNLOAD_FILE                 = '/fs/hdfs/download.json';
CONSTANTS.FS.HDFS_GET_FILE_INFO                 = '/fs/hdfs/getFileInfo.json';
CONSTANTS.FS.HDFS_COPY_FILE                     = '/fs/hdfs/copyFiles.json';
CONSTANTS.FS.HDFS_MOVE_FILE                     = '/fs/hdfs/moveFiles.json';
CONSTANTS.FS.HDFS_RENAME_FILE                   = '/fs/hdfs/renameFile.json';
CONSTANTS.FS.HDFS_DELETE_FILE                   = '/fs/hdfs/deleteFiles.json';
CONSTANTS.FS.HDFS_GET_DEFAULT_FILE_CONTENTS     = '/fs/hdfs/initViewFileContents.json';
CONSTANTS.FS.HDFS_GET_FILE_CONTENTS             = '/fs/hdfs/viewFileContents.json';
CONSTANTS.FS.HDFS_GET_MERGE_FILE                = '/fs/hdfs/mergeFiles';
CONSTANTS.FS.HDFS_SET_PERMISSION                = '/fs/hdfs/setPermission';
CONSTANTS.FS.HDFS_COPY_TO_LOCAL                 = '/fs/hdfs/copyToLocal';
CONSTANTS.FS.HDFS_SAVE_MAX                      = '/fs/hdfs/saveMax';
CONSTANTS.FS.GET_HDFS_TOP5                      = '/fs/top5.json';
CONSTANTS.FS.CHECK_FILEINFO                     = '/fs/hdfs/checkFileInfo';


///////////////////////////////////////
// File System > S3
///////////////////////////////////////
CONSTANTS.FS.S3_LIST_OBJECT                     = '/fs/s3/listObjects.json';
CONSTANTS.FS.S3_LIST_FOLDER                     = '/fs/s3/listFolders.json';
CONSTANTS.FS.S3_CREATE_BUCKET                   = '/fs/s3/createBucket.json';
CONSTANTS.FS.S3_DELETE_BUCKET                   = '/fs/s3/deleteBucket.json';
CONSTANTS.FS.S3_GET_BUCKET_ACL                  = '/fs/s3/getBucketAcl.json';
CONSTANTS.FS.S3_GET_BUCKET_LOCATION             = '/fs/s3/getBucketLocation.json';
CONSTANTS.FS.S3_CREATE_FOLDER                   = '/fs/s3/createFolder.json';
CONSTANTS.FS.S3_COPY_OBJECT                     = '/fs/s3/copyObject.json';
CONSTANTS.FS.S3_MOVE_OBJECT                     = '/fs/s3/moveObject.json';
CONSTANTS.FS.S3_RENAME_OBJECT                   = '/fs/s3/renameObject.json';
CONSTANTS.FS.S3_DELETE_OBJECT                   = '/fs/s3/deleteObject.json';
CONSTANTS.FS.S3_UPLOAD_OBJECT                   = '/fs/s3/upload.json';
CONSTANTS.FS.S3_DOWNLOAD_OBJECT                 = '/fs/s3/download.json';
CONSTANTS.FS.S3_GET_OBJECT_PROPERTY             = '/fs/s3/getObjectProperty.json';
CONSTANTS.FS.S3_GET_OBJECT_ACL                  = '/fs/s3/getObjectAcl.json';
CONSTANTS.FS.S3_PREVIEW_OBJECT                  = '/fs/s3/getObjectAsString.json';

///////////////////////////////////////
// Workflow Designer
///////////////////////////////////////
CONSTANTS.OOZIE.WORKFLOW_ACTION                 = '/oozie/workflow/action.json';
CONSTANTS.OOZIE.WORKFLOW_RUN                    = '/oozie/workflow/run.json';
CONSTANTS.OOZIE.WORKFLOW_SAVE                   = '/oozie/workflow/save.json';
CONSTANTS.OOZIE.WORKFLOW.TREE.GET               = '/oozie/workflow/treeGet.json';
CONSTANTS.OOZIE.WORKFLOW.TREE.DELETE            = '/oozie/workflow/delete.json';
CONSTANTS.OOZIE.WORKFLOW.TREE.CREATE            = '/oozie/workflow/newFolder.json';
CONSTANTS.OOZIE.WORKFLOW.TREE.COPY              = '/oozie/workflow/copy.json';