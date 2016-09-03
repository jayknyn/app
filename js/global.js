var xBrowserSync = xBrowserSync || {};
xBrowserSync.App = xBrowserSync.App || {};

/* ------------------------------------------------------------------------------------
 * Class name:	xBrowserSync.App.Global
 * Description:	Defines global properties used across all platforms.
 * ------------------------------------------------------------------------------------ */ 

xBrowserSync.App.Global = function(platform) {
    'use strict';
    
	var Global = {
        Alarm: {
            Name: {
                Get: function() {
                    return 'xBrowserSync-alarm';
                }
            },
            Period: {
                Get: function() {
                    return 5;
                }
            }
        },
        ApiVersion: '1.0.0',
        Bookmark: {
            DescriptionMaxLength: 500
        },
        Cache: {
            Bookmarks: {
                Get: function() {
                    var bookmarks = platform.LocalStorage.Get(
                        'xBrowserSync-cachedBookmarks');
                    
                    if (!!bookmarks) {
                        try {
                            bookmarks = JSON.parse(bookmarks);
                        }
                        catch(err) {
                            bookmarks = null;
                        }
                    }
                    
                    return bookmarks;
                },
                Set: function(value) {
                    var bookmarks = '';
                    
                    if (!!value) {
                        try {
                            bookmarks = JSON.stringify(value);
                        }
                        catch(err) { }
                    }
                    
                    platform.LocalStorage.Set(
                        'xBrowserSync-cachedBookmarks', 
                        bookmarks);
                }
            }
        },
        Commands: {
            SyncBookmarks: 1,
            RestoreBookmarks: 2,
            NoCallback: 3
        },
        Constants: {
            Title: 'title',
			Description: 'description',
			BookmarksBarTitle: 'bookmarksBarTitle',
			TooltipSyncEnabled: 'tooltipSyncEnabled',
			TooltipWorking: 'tooltipWorking',
			Button_Settings_Label: 'button_Settings_Label',
			Button_AddBookmark_Label: 'button_AddBookmark_Label',
			Button_EditBookmark_Label: 'button_EditBookmark_Label',
			Button_Help_Label: 'button_Help_Label',
			Button_Next_Label: 'button_Next_Label',
			Button_Previous_Label: 'button_Previous_Label',
            IntroPanel1_Message: 'introPanel1_Message',
            IntroPanel2_Message: 'introPanel2_Message',
            IntroPanel3_Message: 'introPanel3_Message',
            IntroPanel4_Message: 'introPanel4_Message',
            IntroPanel5_Message: 'introPanel5_Message',
            IntroPanel6_Message: 'introPanel6_Message',
            IntroPanel7_Message: 'introPanel7_Message',
            IntroPanel8_Message: 'introPanel8_Message',
            IntroPanel9_Message: 'introPanel9_Message',
            IntroPanel10_Message: 'introPanel10_Message',
            IntroPanel11_Message: 'introPanel11_Message',
            IntroPanel12_Message: 'introPanel12_Message',
            IntroPanel13_Message: 'introPanel13_Message',
            IntroPanel14_Message: 'introPanel14_Message',
			Field_ClientSecret_Label: 'field_ClientSecret_Label',
			Field_ClientSecret_Description: 'field_ClientSecret_Description',
			Field_Id_Label: 'field_Id_Label',
			Field_Id_Description: 'field_Id_Description',
			Button_Sync_Enable_Label: 'button_Sync_Enable_Label',
			Button_Sync_Disable_Label: 'button_Sync_Disable_Label',
			ConfirmReplaceBookmarks_Title: 'confirmReplaceBookmarks_Title',
			ConfirmReplaceBookmarks_Message: 'confirmReplaceBookmarks_Message',
			Button_Confirm_Label: 'button_Confirm_Label',
			Button_Deny_Label: 'button_Deny_Label',
			Field_Search_Description: 'field_Search_Description',
            NoSearchResults_Message: 'noSearchResults_Message', 
            CancelSyncConfirmation_Message: 'cancelSyncConfirmation_Message',
            ServiceStatus_Label: 'serviceStatus_Label',
            ServiceStatus_NoNewSyncs: 'serviceStatus_NoNewSyncs',
			ServiceStatus_Online: 'serviceStatus_Online',
			ServiceStatus_Offline: 'serviceStatus_Offline',
			Button_UpdateServiceUrl_Label: 'button_UpdateServiceUrl_Label',
			UpdateServiceUrlForm_Message: 'updateServiceUrlForm_Message',
			UpdateServiceUrlForm_Placeholder: 'updateServiceUrlForm_Placeholder',
			Button_UpdateServiceUrl_Submit_Label: 'button_UpdateServiceUrl_Submit_Label',
			Button_Cancel_Label: 'button_Cancel_Label',
			ConfirmUpdateServiceUrl_Message: 'confirmUpdateServiceUrl_Message',
			BackupRestore_Title: 'backupRestore_Title',
            BackupRestore_Message: 'backupRestore_Message',
			Button_Backup_Label: 'button_Backup_Label',
			Button_Restore_Label: 'button_Restore_Label',
			Button_Done_Label: 'button_Done_Label',
			Button_Close_Label: 'button_Close_Label',
			BackupSuccess_Message: 'backupSuccess_Message',
			RestoreSuccess_Message: 'restoreSuccess_Message',
			RestoreForm_Message: 'restoreForm_Message',
			DataToRestore_Label: 'dataToRestore_Label',
			Button_RestoreData_Label: 'button_RestoreData_Label',
			Button_RestoreData_Invalid_Label: 'button_RestoreData_Invalid_Label',
			Button_RestoreData_Ready_Label: 'button_RestoreData_Ready_Label',
			SyncPanel_Title: 'syncPanel_Title',
            SyncPanel_Message: 'syncPanel_Message',
            SyncPanel_Id_Label: 'syncPanel_Id_Label',
			SyncPanel_IncludeBookmarksBar_Label: 'syncPanel_IncludeBookmarksBar_Label',
            ConfirmRestore_Sync_Message: 'confirmRestore_Sync_Message',
            ConfirmRestore_NoSync_Message: 'confirmRestore_NoSync_Message',
            BookmarkPanel_Title_Add: 'bookmarkPanel_Title_Add',
            BookmarkPanel_Title_Edit: 'bookmarkPanel_Title_Edit',
            BookmarkPanel_Field_Title_Label: 'bookmarkPanel_Field_Title_Label',
            BookmarkPanel_Field_Url_Label: 'bookmarkPanel_Field_Url_Label',
            BookmarkPanel_Field_Description_Label: 'bookmarkPanel_Field_Description_Label',
            BookmarkPanel_Field_Tags_Label: 'bookmarkPanel_Field_Tags_Label',
            BookmarkPanel_Field_Tags_Placeholder: 'bookmarkPanel_Field_Tags_Placeholder',
            BookmarkPanel_Button_AddTags_Label: 'bookmarkPanel_Button_AddTags_Label',
            BookmarkPanel_Button_RemoveTag_Label: 'bookmarkPanel_Button_RemoveTag_Label',
            BookmarkPanel_Button_AddBookmark_Label: 'bookmarkPanel_Button_AddBookmark_Label',
            BookmarkPanel_Button_RemoveBookmark_Label: 'bookmarkPanel_Button_RemoveBookmark_Label',
            BookmarkPanel_Button_UpdateBookmark_Label: 'bookmarkPanel_Button_UpdateBookmark_Label',
            Working_Title: 'working_Title',
            Working_Message: 'working_Message',
            Error_Default_Title: 'error_Default_Title',
            Error_Default_Message: 'error_Default_Message',
            Error_HttpRequestFailed_Title: 'error_HttpRequestFailed_Title',
            Error_HttpRequestFailed_Message: 'error_HttpRequestFailed_Message',
            Error_TooManyRequests_Title: 'error_TooManyRequests_Title',
            Error_TooManyRequests_Message: 'error_TooManyRequests_Message',
			Error_RequestEntityTooLarge_Title: 'error_RequestEntityTooLarge_Title',
            Error_RequestEntityTooLarge_Message: 'error_RequestEntityTooLarge_Message',
            Error_NotAcceptingNewSyncs_Title: 'error_NotAcceptingNewSyncs_Title',
            Error_NotAcceptingNewSyncs_Message: 'error_NotAcceptingNewSyncs_Message',
            Error_DailyNewSyncLimitReached_Title: 'error_DailyNewSyncLimitReached_Title',
            Error_DailyNewSyncLimitReached_Message: 'error_DailyNewSyncLimitReached_Message',
            Error_MissingClientData_Title: 'error_MissingClientData_Title',
            Error_MissingClientData_Message: 'error_MissingClientData_Message',
			Error_NoDataFound_Title: 'error_NoDataFound_Title',
			Error_NoDataFound_Message: 'error_NoDataFound_Message',
			Error_NoDataToRestore_Title: 'error_NoDataToRestore_Title',
			Error_NoDataToRestore_Message: 'error_NoDataToRestore_Message',
			Error_FailedGetLocalBookmarks_Title: 'error_FailedGetLocalBookmarks_Title',
			Error_FailedGetLocalBookmarks_Message: 'error_FailedGetLocalBookmarks_Message',
            Error_FailedCreateLocalBookmarks_Title: 'error_FailedCreateLocalBookmarks_Title',
            Error_FailedCreateLocalBookmarks_Message: 'error_FailedCreateLocalBookmarks_Message',
			Error_FailedRemoveLocalBookmarks_Title: 'error_FailedRemoveLocalBookmarks_Title',
			Error_FailedRemoveLocalBookmarks_Message: 'error_FailedRemoveLocalBookmarks_Message',
			Error_InvalidData_Title: 'error_InvalidData_Title',
			Error_InvalidData_Message: 'error_InvalidData_Message',
			Error_LastChangeNotSynced_Title: 'error_LastChangeNotSynced_Title',
			Error_LastChangeNotSynced_Message: 'error_LastChangeNotSynced_Message',
			Error_OutOfSync_Title: 'error_OutOfSync_Title',
			Error_OutOfSync_Message: 'error_OutOfSync_Message',
            Error_BrowserImportBookmarksNotSupported_Title: 'error_BrowserImportBookmarksNotSupported_Title',
			Error_BrowserImportBookmarksNotSupported_Message: 'error_BrowserImportBookmarksNotSupported_Message',
            Error_NotImplemented_Title: 'error_NotImplemented_Title',
			Error_NotImplemented_Message: 'error_NotImplemented_Message',
            Error_SyncInterrupted_Title: 'error_syncInterrupted_Title',
            Error_SyncInterrupted_Message: 'error_syncInterrupted_Message'
        },
        ClientSecret: {
            Get: function() {
                return platform.LocalStorage.Get(
                    'xBrowserSync-clientSecret');
            },
            Set: function(value) {
                value = (!value) ? '' : value.trim();
                
                platform.LocalStorage.Set(
                    'xBrowserSync-clientSecret', 
                    value);
            }
        },
        DisableEventListeners: {
            Get: function() {
                var value;
                
                value = platform.LocalStorage.Get(
                    'xBrowserSync-disableEventListeners');
                
                if (!value) {
                    return false;
                }
                else {
                    if (value === 'true') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            Set: function(value) {
                platform.LocalStorage.Set(
                    'xBrowserSync-disableEventListeners', 
                    value);
            }
        },
        DisplayIntro: {
            Get: function() {
                var value;
                
                value = platform.LocalStorage.Get(
                    'xBrowserSync-displayIntro');
                
                if (!value) {
                    return true;
                }
                else {
                    if (value === 'true') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            Set: function(value) {
                platform.LocalStorage.Set(
                    'xBrowserSync-displayIntro', 
                    value);
            }
        },
        ErrorCodes: {
            HttpRequestFailed: 10000,
            TooManyRequests: 10001,
            RequestEntityTooLarge: 10002,
            NotAcceptingNewSyncs: 10003,
            DailyNewSyncLimitReached: 10004,
            MissingClientData: 10100, 
            AmbiguousSyncRequest: 10101,
            FailedGetLocalBookmarks: 10102,
            FailedCreateLocalBookmarks: 10103,
            FailedRemoveLocalBookmarks: 10104,            
            NoDataFound: 10105,
            InvalidData: 10106,
            UpdatedBookmarkNotFound: 10107,
            XBookmarkNotFound: 10108,
            NoStatus: 10200,
            FailedGetPageMetadata: 10300,
            NotImplemented: 10400
        },
        Id: {
            Get: function() {
                var value = platform.LocalStorage.Get(
                    'xBrowserSync-Id');
                value = (value === '' || value === 'null') ? null : value;
                
                return value;
            },
            Set: function(value) {
                value = (!value) ? '' : value.trim();
                
                platform.LocalStorage.Set(
                    'xBrowserSync-Id', 
                    value);
            }
        },
        IncludeBookmarksBar: {
            Get: function() {
                var value;
                
                value = platform.LocalStorage.Get(
                    'xBrowserSync-includeBookmarksBar');
                
                if (!value) {
                    return true;
                }
                else {
                    if (value === 'true') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            Set: function(value) {
                platform.LocalStorage.Set(
                    'xBrowserSync-includeBookmarksBar', 
                    value);
                
                // Clear LastUpdated to ensure next update check refreshes local
                // bookmarks
                Global.LastUpdated.Set('');
            }
        },
        IsSyncing: {
            Get: function() {
                var value;
                
                value = platform.LocalStorage.Get(
                    'xBrowserSync-isSyncing');
                
                if (!value) {
                    return false;
                }
                else {
                    if (value === 'true') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            Set: function(value) {
                platform.LocalStorage.Set(
                    'xBrowserSync-isSyncing', 
                    value);
                
                platform.Interface.Refresh();
            }
        },
        LastUpdated: {
            Get: function() {
                var lastUpdatedVal = platform.LocalStorage.Get(
                    'xBrowserSync-lastUpdated');
                
                if (!!lastUpdatedVal) {
                    return new Date(lastUpdatedVal);
                }
                else {
                    return null;
                }
            },
            Set: function(value) {
                platform.LocalStorage.Set(
                    'xBrowserSync-lastUpdated', 
                    value);
            }
        },
        LookaheadMinChars: 1,
        RetrySyncTimeout: 100,
        ServiceStatus: {
            Online: 1,
            Offline: 2,
            NoNewSyncs: 3
        },
        SyncEnabled: {
            Get: function() {
                var value;
                
                value = platform.LocalStorage.Get(
                    'xBrowserSync-syncEnabled');
                
                if (!value) {
                    return false;
                }
                else {
                    if (value === 'true') {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            },
            Set: function(value) {
                platform.LocalStorage.Set(
                    'xBrowserSync-syncEnabled', 
                    value);
                
                platform.Interface.Refresh();
            }
        },
        SyncType: { 
            Push: 1, 
            Pull: 2,
            Both: 3
        },
        Title: {
            Get: function() {
                return 'xBrowserSync';
            }
        },
        UpdateType: {
            Create: 1,
            Delete: 2,
            Update: 3,
            Move: 4
        },
        URL: {
            Host: {
                Get: function() {
                    var defaultUrl = 'https://api-xbrowsersync.rhcloud.com';
                    var urlHost = platform.LocalStorage.Get(
                        'xBrowserSync-urlHost');
                    
                    urlHost = (urlHost === null || urlHost === undefined) ?
                        defaultUrl :
                        urlHost;
                    
                    return urlHost;
                },
                Set: function(value) {
                    value = (!value) ? '' : value;
                    
                    platform.LocalStorage.Set(
                        'xBrowserSync-urlHost', 
                        value);
                }
            },
            Bookmarks: '/bookmarks',
            LastUpdated: '/lastUpdated',
            ServiceInformation: '/info'
        }
    };
    
    return Global;
};