import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerVariableService {
  constructor() { }

  STRING_WHEN_NO_RECORDS_FOUND = 'No records found.';
  STRING_WHEN_NO_ATTCHAMENT_FOUND = 'No attachment found.';
  ERROR_MSG_WHEN_NO_ACCESS_ON_Upload = 'You have no permission to upload assets. Please contact Administrator';

  // PATH For API

  PATH_FOR_API = 'api/';

  // API for Login and Logout

  loginAPI = this.PATH_FOR_API + 'login';

  // API for User
  getUsersAPI = this.PATH_FOR_API + 'getUsers';
  manageUsersAPI = this.PATH_FOR_API + 'manageUsers';
  updateUserAPI = this.PATH_FOR_API + 'updateUser';
  deleteUserAPI = this.PATH_FOR_API + 'deleteUser';
  forgotPasswordAPI = this.PATH_FOR_API + 'forgotPassword';

  // API for Role
  getRoles = this.PATH_FOR_API + 'getRoles';
  manageRolesAPI = this.PATH_FOR_API + 'manageRoles';
  deleteRoleAPI = this.PATH_FOR_API + 'deleteRole';
  updateRoleAPI = this.PATH_FOR_API + 'updateRole';

  // API for Collection
  manageCollectionAPI = this.PATH_FOR_API + 'manageCollection';
  listCollectionsAPI = this.PATH_FOR_API + 'listCollections';
  updateCollectionsAPI = this.PATH_FOR_API + 'updateCollections';
  deleteCollectionAPI = this.PATH_FOR_API + 'deleteCollection';

  // API for Assets
  listAssetsAPI = this.PATH_FOR_API + 'listAssets';
  listShareAsstesAPI = this.PATH_FOR_API + 'listShareAsstes';
  deleteAssetAPI = this.PATH_FOR_API + 'deleteAsset';
  deleteAssetPermanentlyAPI = this.PATH_FOR_API + 'deleteAssetPermanently';
  restoreDeletedAssetAPI = this.PATH_FOR_API + 'restoreDeletedAsset';
  getAssetDetailsAPI = this.PATH_FOR_API + 'getAssetDetails';
  downloadIndividualAssetAPI = this.PATH_FOR_API + 'downloadIndividualAsset';
  downloadShareAssetsAPI = this.PATH_FOR_API + 'downloadShareAssets';
  addAssetCollectionsAPI = this.PATH_FOR_API + 'addAssetCollections';
  searchAssetsAPI = this.PATH_FOR_API + 'searchAssets';
  createAssetsAPI = this.PATH_FOR_API + 'createAssets';
  checkFileExistsAPI = this.PATH_FOR_API + 'checkFileExists';

  // API for Share
  listSharesAPI = this.PATH_FOR_API + 'listShares';
  createShareAPI = this.PATH_FOR_API + 'createShare';
  manageShareAPI = this.PATH_FOR_API + 'manageShare';
  deleteSharesAPI = this.PATH_FOR_API + 'deleteShares';

  // API for Tag

  createTagAPI = this.PATH_FOR_API + 'createTag';
  assignAssetTagAPI = this.PATH_FOR_API + 'assignAssetTag';
  removeAssignAssetTagAPI = this.PATH_FOR_API + 'removeAssignAssetTag';
  searchTagAPI = this.PATH_FOR_API + 'searchTag';

  // other APIS

  getUsagesAPI = this.PATH_FOR_API + 'getUsages';
  viewRecycleBinAPI = this.PATH_FOR_API + 'viewRecycleBin';
  createNewFolderAPI = this.PATH_FOR_API + 'createNewFolder';
  getOrganizationDetailsAPI = this.PATH_FOR_API + 'getOrganizationDetails';
  getAssetDetailsWithoutHeaderAPI = this.PATH_FOR_API + 'getAssetDetailsWithoutHeader';
  listTagsAPI = this.PATH_FOR_API + 'listTags';
  getActivityLogsAPI = this.PATH_FOR_API + 'getActivityLogs';
  downloadActivityLogsAPI = this.PATH_FOR_API + 'downloadActivityLogs';
  getMetaFieldsAPI = this.PATH_FOR_API + 'getMetaFields';
  addMetaDataValuesAPI = this.PATH_FOR_API + 'addMetaDataValues';

}
