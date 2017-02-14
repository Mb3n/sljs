import Collection from '../../utilities/Collection'
import * as Packet from '../packets'

class Lookup {
  static lookup = new Collection([
    [10, Packet.TestMessage],
    [22, Packet.CompletePingCheck],
    [31, Packet.RequestMultipleObjects],
    [40, Packet.AvatarTextureUpdate],
    [42, Packet.AgentUpdate],
    [50, Packet.SimulatorMapUpdate],
    [51, Packet.RequestObjectPropertiesFamily],
    [52, Packet.AgentAnimation],
    [60, Packet.SimulatorSetMap],
    [62, Packet.AgentRequestSit],
    [70, Packet.SubscribeLoad],
    [72, Packet.AgentSit],
    [80, Packet.UnsubscribeLoad],
    [81, Packet.ConfirmEnableSimulator],
    [82, Packet.RequestImage],
    [90, Packet.SimulatorReady],
    [92, Packet.ImageData],
    [102, Packet.ImagePacket],
    [110, Packet.SimulatorPresentAtLocation],
    [111, Packet.ParcelPropertiesRequest],
    [112, Packet.LayerData],
    [120, Packet.SimulatorLoad],
    [121, Packet.SimStatus],
    [130, Packet.SimulatorShutdownRequest],
    [131, Packet.AttachedSound],
    [132, Packet.ObjectUpdateCompressed],
    [140, Packet.RegionPresenceRequestByRegionID],
    [141, Packet.AttachedSoundGainChange],
    [142, Packet.ObjectUpdateCached],
    [150, Packet.RegionPresenceRequestByHandle],
    [151, Packet.PreloadSound],
    [152, Packet.ImprovedTerseObjectUpdate],
    [160, Packet.RegionPresenceResponse],
    [161, Packet.InternalScriptMail],
    [162, Packet.KillObject],
    [170, Packet.UpdateSimulator],
    [172, Packet.TransferPacket],
    [180, Packet.LogDwellTime],
    [182, Packet.SendXferPacket],
    [190, Packet.FeatureDisabled],
    [192, Packet.ConfirmXferPacket],
    [202, Packet.AvatarAnimation],
    [210, Packet.UserReportInternal],
    [212, Packet.AvatarSitResponse],
    [222, Packet.CameraConstraint],
    [240, Packet.EconomyDataRequest],
    [242, Packet.EdgeDataPacket],
    [250, Packet.EconomyData],
    [260, Packet.AvatarPickerRequest],
    [262, Packet.ChildAgentAlive],
    [270, Packet.AvatarPickerRequestBackend],
    [272, Packet.ChildAgentPositionUpdate],
    [280, Packet.AvatarPickerReply],
    [290, Packet.PlacesQuery],
    [330, Packet.DirPlacesQuery],
    [340, Packet.DirPlacesQueryBackend],
    [350, Packet.DirPlacesReply],
    [360, Packet.DirPeopleReply],
    [370, Packet.DirEventsReply],
    [390, Packet.DirClassifiedQuery],
    [400, Packet.DirClassifiedQueryBackend],
    [410, Packet.DirClassifiedReply],
    [420, Packet.AvatarClassifiedReply],
    [430, Packet.ClassifiedInfoRequest],
    [440, Packet.ClassifiedInfoReply],
    [450, Packet.ClassifiedInfoUpdate],
    [460, Packet.ClassifiedDelete],
    [470, Packet.ClassifiedGodDelete],
    [480, Packet.DirLandQuery],
    [490, Packet.DirLandQueryBackend],
    [540, Packet.ParcelInfoRequest],
    [560, Packet.ParcelObjectOwnersRequest],
    [580, Packet.GroupNoticesListRequest],
    [590, Packet.GroupNoticesListReply],
    [600, Packet.GroupNoticeRequest],
    [610, Packet.GroupNoticeAdd],
    [620, Packet.TeleportRequest],
    [630, Packet.TeleportLocationRequest],
    [650, Packet.TeleportLandmarkRequest],
    [670, Packet.DataHomeLocationRequest],
    [700, Packet.StartLure],
    [710, Packet.TeleportLureRequest],
    [720, Packet.TeleportCancel],
    [730, Packet.TeleportStart],
    [750, Packet.Undo],
    [760, Packet.Redo],
    [770, Packet.UndoLand],
    [800, Packet.ChatFromViewer],
    [810, Packet.AgentThrottle],
    [820, Packet.AgentFOV],
    [830, Packet.AgentHeightWidth],
    [850, Packet.AgentQuitCopy],
    [860, Packet.ImageNotInDatabase],
    [870, Packet.RebakeAvatarTextures],
    [880, Packet.SetAlwaysRun],
    [930, Packet.ObjectRotation],
    [940, Packet.ObjectFlagUpdate],
    [950, Packet.ObjectClickAction],
    [960, Packet.ObjectImage],
    [970, Packet.ObjectMaterial],
    [990, Packet.ObjectExtraParams],
    [1010, Packet.ObjectGroup],
    [1030, Packet.BuyObjectInventory],
    [1070, Packet.ObjectName],
    [1080, Packet.ObjectDescription],
    [1090, Packet.ObjectCategory],
    [1100, Packet.ObjectSelect],
    [1110, Packet.ObjectDeselect],
    [1120, Packet.ObjectAttach],
    [1130, Packet.ObjectDetach],
    [1140, Packet.ObjectDrop],
    [1150, Packet.ObjectLink],
    [1160, Packet.ObjectDelink],
    [1170, Packet.ObjectGrab],
    [1190, Packet.ObjectDeGrab],
    [1200, Packet.ObjectSpinStart],
    [1210, Packet.ObjectSpinUpdate],
    [1220, Packet.ObjectSpinStop],
    [1230, Packet.ObjectExportSelected],
    [1240, Packet.ModifyLand],
    [1250, Packet.VelocityInterpolateOn],
    [1260, Packet.VelocityInterpolateOff],
    [1270, Packet.StateSave],
    [1280, Packet.ReportAutosaveCrash],
    [1290, Packet.SimWideDeletes],
    [1300, Packet.TrackAgent],
    [1320, Packet.ScriptAnswerYes],
    [1340, Packet.AlertMessage],
    [1350, Packet.AgentAlertMessage],
    [1360, Packet.MeanCollisionAlert],
    [1370, Packet.ViewerFrozenMessage],
    [1380, Packet.HealthMessage],
    [1400, Packet.SimStats],
    [1410, Packet.RequestRegionInfo],
    [1440, Packet.NearestLandingRegionRequest],
    [1450, Packet.NearestLandingRegionReply],
    [1460, Packet.NearestLandingRegionUpdated],
    [1470, Packet.TeleportLandingStatusChanged],
    [1490, Packet.RegionHandshakeReply],
    [1500, Packet.SimulatorViewerTimeMessage],
    [1510, Packet.EnableSimulator],
    [1520, Packet.DisableSimulator],
    [1530, Packet.TransferRequest],
    [1540, Packet.TransferInfo],
    [1550, Packet.TransferAbort],
    [1570, Packet.AbortXfer],
    [1580, Packet.AvatarAppearance],
    [1590, Packet.SetFollowCamProperties],
    [1600, Packet.ClearFollowCamProperties],
    [1610, Packet.RequestPayPrice],
    [1620, Packet.PayPriceReply],
    [1640, Packet.KickUserAck],
    [1660, Packet.SystemKickUser],
    [1670, Packet.EjectUser],
    [1680, Packet.FreezeUser],
    [1690, Packet.AvatarPropertiesRequest],
    [1700, Packet.AvatarPropertiesRequestBackend],
    [1790, Packet.EventInfoRequest],
    [1800, Packet.EventInfoReply],
    [1810, Packet.EventNotificationAddRequest],
    [1820, Packet.EventNotificationRemoveRequest],
    [1840, Packet.PickInfoReply],
    [1850, Packet.PickInfoUpdate],
    [1860, Packet.PickDelete],
    [1870, Packet.PickGodDelete],
    [1880, Packet.ScriptQuestion],
    [1890, Packet.ScriptControlChange],
    [1900, Packet.ScriptDialog],
    [1910, Packet.ScriptDialogReply],
    [1920, Packet.ForceScriptControlRelease],
    [1930, Packet.RevokePermissions],
    [1940, Packet.LoadURL],
    [1950, Packet.ScriptTeleportRequest],
    [1970, Packet.ParcelPropertiesRequestByID],
    [1990, Packet.ParcelReturnObjects],
    [2000, Packet.ParcelSetOtherCleanTime],
    [2010, Packet.ParcelDisableObjects],
    [2020, Packet.ParcelSelectObjects],
    [2030, Packet.EstateCovenantRequest],
    [2050, Packet.ForceObjectSelect],
    [2060, Packet.ParcelBuyPass],
    [2100, Packet.ParcelJoin],
    [2110, Packet.ParcelDivide],
    [2150, Packet.ParcelAccessListRequest],
    [2190, Packet.ParcelDwellReply],
    [2210, Packet.UpdateParcel],
    [2220, Packet.RemoveParcel],
    [2230, Packet.MergeParcel],
    [2240, Packet.LogParcelChanges],
    [2250, Packet.CheckParcelSales],
    [2260, Packet.ParcelSales],
    [2270, Packet.ParcelGodMarkAsContent],
    [2280, Packet.ViewerStartAuction],
    [2300, Packet.ConfirmAuctionStart],
    [2310, Packet.CompleteAuction],
    [2320, Packet.CancelAuction],
    [2330, Packet.CheckParcelAuctions],
    [2340, Packet.ParcelAuctions],
    [2350, Packet.UUIDNameRequest],
    [2360, Packet.UUIDNameReply],
    [2370, Packet.UUIDGroupNameRequest],
    [2380, Packet.UUIDGroupNameReply],
    [2390, Packet.ChatPass],
    [2400, Packet.ChildAgentDying],
    [2410, Packet.ChildAgentUnknown],
    [2420, Packet.KillChildAgents],
    [2430, Packet.GetScriptRunning],
    [2450, Packet.SetScriptRunning],
    [2460, Packet.ScriptReset],
    [2470, Packet.ScriptSensorRequest],
    [2480, Packet.ScriptSensorReply],
    [2490, Packet.CompleteAgentMovement],
    [2500, Packet.AgentMovementComplete],
    [2510, Packet.DataServerLogout],
    [2520, Packet.LogoutRequest],
    [2550, Packet.RetrieveInstantMessages],
    [2560, Packet.FindAgent],
    [2590, Packet.GodlikeMessage],
    [2600, Packet.EstateOwnerMessage],
    [2610, Packet.GenericMessage],
    [2620, Packet.MuteListRequest],
    [2630, Packet.UpdateMuteListEntry],
    [2640, Packet.RemoveMuteListEntry],
    [2700, Packet.RemoveInventoryItem],
    [2710, Packet.ChangeInventoryItemFlags],
    [2720, Packet.SaveAssetIntoInventory],
    [2730, Packet.CreateInventoryFolder],
    [2740, Packet.UpdateInventoryFolder],
    [2760, Packet.RemoveInventoryFolder],
    [2790, Packet.FetchInventory],
    [2820, Packet.RequestInventoryAsset],
    [2830, Packet.InventoryAssetResponse],
    [2840, Packet.RemoveInventoryObjects],
    [2850, Packet.PurgeInventoryDescendents],
    [2870, Packet.RemoveTaskInventory],
    [2880, Packet.MoveTaskInventory],
    [2890, Packet.RequestTaskInventory],
    [2920, Packet.DeRezAck],
    [2940, Packet.RezObjectFromNotecard],
    [2950, Packet.TransferInventory],
    [2960, Packet.TransferInventoryAck],
    [2980, Packet.DeclineFriendship],
    [2990, Packet.FormFriendship],
    [3000, Packet.TerminateFriendship],
    [3010, Packet.OfferCallingCard],
    [3030, Packet.DeclineCallingCard],
    [3060, Packet.CreateLandmarkForEvent],
    [3070, Packet.EventLocationRequest],
    [3080, Packet.EventLocationReply],
    [3090, Packet.RegionHandleRequest],
    [3100, Packet.RegionIDAndHandleReply],
    [3130, Packet.MoneyBalanceRequest],
    [3160, Packet.ActivateGestures],
    [3170, Packet.DeactivateGestures],
    [3180, Packet.MuteListUpdate],
    [3190, Packet.UseCachedMuteList],
    [3200, Packet.GrantUserRights],
    [3210, Packet.ChangeUserRights],
    [3220, Packet.OnlineNotification],
    [3230, Packet.OfflineNotification],
    [3260, Packet.NetTest],
    [3270, Packet.SetCPURatio],
    [3280, Packet.SimCrashed],
    [3290, Packet.NameValuePair],
    [3300, Packet.RemoveNameValuePair],
    [3320, Packet.RemoveAttachment],
    [3340, Packet.AssetUploadComplete],
    [3350, Packet.EmailMessageRequest],
    [3370, Packet.ScriptDataRequest],
    [3380, Packet.ScriptDataReply],
    [3420, Packet.GroupRoleChanges],
    [3430, Packet.JoinGroupRequest],
    [3440, Packet.JoinGroupReply],
    [3450, Packet.EjectGroupMemberRequest],
    [3460, Packet.EjectGroupMemberReply],
    [3470, Packet.LeaveGroupRequest],
    [3480, Packet.LeaveGroupReply],
    [3500, Packet.InviteGroupResponse],
    [3510, Packet.GroupProfileRequest],
    [3530, Packet.GroupAccountSummaryRequest],
    [3550, Packet.GroupAccountDetailsRequest],
    [3570, Packet.GroupAccountTransactionsRequest],
    [3590, Packet.GroupActiveProposalsRequest],
    [3610, Packet.GroupVoteHistoryRequest],
    [3650, Packet.TallyVotes],
    [3660, Packet.GroupMembersRequest],
    [3680, Packet.ActivateGroup],
    [3690, Packet.SetGroupContribution],
    [3700, Packet.SetGroupAcceptNotices],
    [3710, Packet.GroupRoleDataRequest],
    [3720, Packet.GroupRoleDataReply],
    [3730, Packet.GroupRoleMembersRequest],
    [3740, Packet.GroupRoleMembersReply],
    [3750, Packet.GroupTitlesRequest],
    [3770, Packet.GroupTitleUpdate],
    [3780, Packet.GroupRoleUpdate],
    [3790, Packet.LiveHelpGroupRequest],
    [3810, Packet.AgentWearablesRequest],
    [3830, Packet.AgentIsNowWearing],
    [3840, Packet.AgentCachedTexture],
    [3850, Packet.AgentCachedTextureResponse],
    [3860, Packet.AgentDataUpdateRequest],
    [3880, Packet.GroupDataUpdate],
    [3930, Packet.DenyTrustedCircuit],
    [3940, Packet.RequestTrustedCircuit],
    [3970, Packet.DetachAttachmentIntoInv],
    [3980, Packet.CreateNewOutfitAttachments],
    [3990, Packet.UserInfoRequest],
    [4000, Packet.UserInfoReply],
    [4010, Packet.UpdateUserInfo],
    [4060, Packet.MapLayerReply],
    [4130, Packet.RpcChannelRequest],
    [4140, Packet.RpcChannelReply],
    [4190, Packet.ParcelMediaCommandMessage],
    [4210, Packet.LandStatRequest],
    [4240, Packet.ObjectIncludeInSearch],
    [42949672913, Packet.PacketAck],
    [42949672923, Packet.OpenCircuit],
    [42949672933, Packet.CloseCircuit]
  ])

  static find (id) {
    return this.lookup.get(id)
  }
}

export default Lookup
