import Collection from '../../utilities/Collection'
import * as Packet from '../packets'

class PacketLookup {
  static lookup = new Collection([
    [10, Packet.TestMessage],
    [11, Packet.ObjectAdd],
    [12, Packet.StartPingCheck],
    [20, Packet.AddCircuitCode],
    [21, Packet.MultipleObjectUpdate],
    [22, Packet.CompletePingCheck],
    [30, Packet.UseCircuitCode],
    [31, Packet.RequestMultipleObjects],
    [32, Packet.NeighborList],
    [40, Packet.AvatarTextureUpdate],
    [42, Packet.AgentUpdate],
    [50, Packet.SimulatorMapUpdate],
    [51, Packet.RequestObjectPropertiesFamily],
    [52, Packet.AgentAnimation],
    [60, Packet.SimulatorSetMap],
    [61, Packet.CoarseLocationUpdate],
    [62, Packet.AgentRequestSit],
    [70, Packet.SubscribeLoad],
    [71, Packet.CrossedRegion],
    [72, Packet.AgentSit],
    [80, Packet.UnsubscribeLoad],
    [81, Packet.ConfirmEnableSimulator],
    [82, Packet.RequestImage],
    [90, Packet.SimulatorReady],
    [91, Packet.ObjectProperties],
    [92, Packet.ImageData],
    [100, Packet.TelehubInfo],
    [101, Packet.ObjectPropertiesFamily],
    [102, Packet.ImagePacket],
    [110, Packet.SimulatorPresentAtLocation],
    [111, Packet.ParcelPropertiesRequest],
    [112, Packet.LayerData],
    [120, Packet.SimulatorLoad],
    [121, Packet.SimStatus],
    [122, Packet.ObjectUpdate],
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
    [171, Packet.ViewerEffect],
    [172, Packet.TransferPacket],
    [180, Packet.LogDwellTime],
    [182, Packet.SendXferPacket],
    [190, Packet.FeatureDisabled],
    [192, Packet.ConfirmXferPacket],
    [200, Packet.LogFailedMoneyTransaction],
    [202, Packet.AvatarAnimation],
    [210, Packet.UserReportInternal],
    [212, Packet.AvatarSitResponse],
    [220, Packet.SetSimStatusInDatabase],
    [222, Packet.CameraConstraint],
    [230, Packet.SetSimPresenceInDatabase],
    [232, Packet.ParcelProperties],
    [240, Packet.EconomyDataRequest],
    [242, Packet.EdgeDataPacket],
    [250, Packet.EconomyData],
    [252, Packet.ChildAgentUpdate],
    [260, Packet.AvatarPickerRequest],
    [262, Packet.ChildAgentAlive],
    [270, Packet.AvatarPickerRequestBackend],
    [272, Packet.ChildAgentPositionUpdate],
    [280, Packet.AvatarPickerReply],
    [282, Packet.AtomicPassObject],
    [290, Packet.PlacesQuery],
    [292, Packet.SoundTrigger],
    [310, Packet.DirFindQuery],
    [320, Packet.DirFindQueryBackend],
    [330, Packet.DirPlacesQuery],
    [340, Packet.DirPlacesQueryBackend],
    [350, Packet.DirPlacesReply],
    [360, Packet.DirPeopleReply],
    [370, Packet.DirEventsReply],
    [380, Packet.DirGroupsReply],
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
    [550, Packet.ParcelInfoReply],
    [560, Packet.ParcelObjectOwnersRequest],
    [580, Packet.GroupNoticesListRequest],
    [590, Packet.GroupNoticesListReply],
    [600, Packet.GroupNoticeRequest],
    [610, Packet.GroupNoticeAdd],
    [620, Packet.TeleportRequest],
    [630, Packet.TeleportLocationRequest],
    [640, Packet.TeleportLocal],
    [650, Packet.TeleportLandmarkRequest],
    [660, Packet.TeleportProgress],
    [670, Packet.DataHomeLocationRequest],
    [680, Packet.DataHomeLocationReply],
    [690, Packet.TeleportFinish],
    [700, Packet.StartLure],
    [710, Packet.TeleportLureRequest],
    [720, Packet.TeleportCancel],
    [730, Packet.TeleportStart],
    [740, Packet.TeleportFailed],
    [750, Packet.Undo],
    [760, Packet.Redo],
    [770, Packet.UndoLand],
    [780, Packet.AgentPause],
    [790, Packet.AgentResume],
    [800, Packet.ChatFromViewer],
    [810, Packet.AgentThrottle],
    [820, Packet.AgentFOV],
    [830, Packet.AgentHeightWidth],
    [840, Packet.AgentSetAppearance],
    [850, Packet.AgentQuitCopy],
    [860, Packet.ImageNotInDatabase],
    [870, Packet.RebakeAvatarTextures],
    [880, Packet.SetAlwaysRun],
    [890, Packet.ObjectDelete],
    [900, Packet.ObjectDuplicate],
    [910, Packet.ObjectDuplicateOnRay],
    [930, Packet.ObjectRotation],
    [940, Packet.ObjectFlagUpdate],
    [950, Packet.ObjectClickAction],
    [960, Packet.ObjectImage],
    [970, Packet.ObjectMaterial],
    [980, Packet.ObjectShape],
    [990, Packet.ObjectExtraParams],
    [1000, Packet.ObjectOwner],
    [1010, Packet.ObjectGroup],
    [1020, Packet.ObjectBuy],
    [1030, Packet.BuyObjectInventory],
    [1040, Packet.DerezContainer],
    [1050, Packet.ObjectPermissions],
    [1060, Packet.ObjectSaleInfo],
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
    [1180, Packet.ObjectGrabUpdate],
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
    [1330, Packet.UserReport],
    [1340, Packet.AlertMessage],
    [1350, Packet.AgentAlertMessage],
    [1360, Packet.MeanCollisionAlert],
    [1370, Packet.ViewerFrozenMessage],
    [1380, Packet.HealthMessage],
    [1390, Packet.ChatFromSimulator],
    [1400, Packet.SimStats],
    [1410, Packet.RequestRegionInfo],
    [1420, Packet.RegionInfo],
    [1430, Packet.GodUpdateRegionInfo],
    [1440, Packet.NearestLandingRegionRequest],
    [1450, Packet.NearestLandingRegionReply],
    [1460, Packet.NearestLandingRegionUpdated],
    [1470, Packet.TeleportLandingStatusChanged],
    [1480, Packet.RegionHandshake],
    [1490, Packet.RegionHandshakeReply],
    [1500, Packet.SimulatorViewerTimeMessage],
    [1510, Packet.EnableSimulator],
    [1520, Packet.DisableSimulator],
    [1530, Packet.TransferRequest],
    [1540, Packet.TransferInfo],
    [1550, Packet.TransferAbort],
    [1560, Packet.RequestXfer],
    [1570, Packet.AbortXfer],
    [1580, Packet.AvatarAppearance],
    [1590, Packet.SetFollowCamProperties],
    [1600, Packet.ClearFollowCamProperties],
    [1610, Packet.RequestPayPrice],
    [1620, Packet.PayPriceReply],
    [1630, Packet.KickUser],
    [1640, Packet.KickUserAck],
    [1650, Packet.GodKickUser],
    [1660, Packet.SystemKickUser],
    [1670, Packet.EjectUser],
    [1680, Packet.FreezeUser],
    [1690, Packet.AvatarPropertiesRequest],
    [1700, Packet.AvatarPropertiesRequestBackend],
    [1710, Packet.AvatarPropertiesReply],
    [1720, Packet.AvatarInterestsReply],
    [1730, Packet.AvatarGroupsReply],
    [1740, Packet.AvatarPropertiesUpdate],
    [1750, Packet.AvatarInterestsUpdate],
    [1760, Packet.AvatarNotesReply],
    [1770, Packet.AvatarNotesUpdate],
    [1780, Packet.AvatarPicksReply],
    [1790, Packet.EventInfoRequest],
    [1800, Packet.EventInfoReply],
    [1810, Packet.EventNotificationAddRequest],
    [1820, Packet.EventNotificationRemoveRequest],
    [1830, Packet.EventGodDelete],
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
    [1960, Packet.ParcelOverlay],
    [1970, Packet.ParcelPropertiesRequestByID],
    [1980, Packet.ParcelPropertiesUpdate],
    [1990, Packet.ParcelReturnObjects],
    [2000, Packet.ParcelSetOtherCleanTime],
    [2010, Packet.ParcelDisableObjects],
    [2020, Packet.ParcelSelectObjects],
    [2030, Packet.EstateCovenantRequest],
    [2040, Packet.EstateCovenantReply],
    [2050, Packet.ForceObjectSelect],
    [2060, Packet.ParcelBuyPass],
    [2070, Packet.ParcelDeedToGroup],
    [2080, Packet.ParcelReclaim],
    [2090, Packet.ParcelClaim],
    [2100, Packet.ParcelJoin],
    [2110, Packet.ParcelDivide],
    [2120, Packet.ParcelRelease],
    [2130, Packet.ParcelBuy],
    [2140, Packet.ParcelGodForceOwner],
    [2150, Packet.ParcelAccessListRequest],
    [2160, Packet.ParcelAccessListReply],
    [2170, Packet.ParcelAccessListUpdate],
    [2180, Packet.ParcelDwellRequest],
    [2190, Packet.ParcelDwellReply],
    [2200, Packet.RequestParcelTransfer],
    [2210, Packet.UpdateParcel],
    [2220, Packet.RemoveParcel],
    [2230, Packet.MergeParcel],
    [2240, Packet.LogParcelChanges],
    [2250, Packet.CheckParcelSales],
    [2260, Packet.ParcelSales],
    [2270, Packet.ParcelGodMarkAsContent],
    [2280, Packet.ViewerStartAuction],
    [2290, Packet.StartAuction],
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
    [2530, Packet.LogoutReply],
    [2540, Packet.ImprovedInstantMessage],
    [2550, Packet.RetrieveInstantMessages],
    [2560, Packet.FindAgent],
    [2570, Packet.RequestGodlikePowers],
    [2580, Packet.GrantGodlikePowers],
    [2590, Packet.GodlikeMessage],
    [2600, Packet.EstateOwnerMessage],
    [2610, Packet.GenericMessage],
    [2620, Packet.MuteListRequest],
    [2630, Packet.UpdateMuteListEntry],
    [2640, Packet.RemoveMuteListEntry],
    [2660, Packet.UpdateInventoryItem],
    [2670, Packet.UpdateCreateInventoryItem],
    [2680, Packet.MoveInventoryItem],
    [2690, Packet.CopyInventoryItem],
    [2700, Packet.RemoveInventoryItem],
    [2710, Packet.ChangeInventoryItemFlags],
    [2720, Packet.SaveAssetIntoInventory],
    [2730, Packet.CreateInventoryFolder],
    [2740, Packet.UpdateInventoryFolder],
    [2750, Packet.MoveInventoryFolder],
    [2760, Packet.RemoveInventoryFolder],
    [2770, Packet.FetchInventoryDescendents],
    [2780, Packet.InventoryDescendents],
    [2790, Packet.FetchInventory],
    [2800, Packet.FetchInventoryReply],
    [2810, Packet.BulkUpdateInventory],
    [2820, Packet.RequestInventoryAsset],
    [2830, Packet.InventoryAssetResponse],
    [2840, Packet.RemoveInventoryObjects],
    [2850, Packet.PurgeInventoryDescendents],
    [2860, Packet.UpdateTaskInventory],
    [2870, Packet.RemoveTaskInventory],
    [2880, Packet.MoveTaskInventory],
    [2890, Packet.RequestTaskInventory],
    [2900, Packet.ReplyTaskInventory],
    [2910, Packet.DeRezObject],
    [2920, Packet.DeRezAck],
    [2930, Packet.RezObject],
    [2940, Packet.RezObjectFromNotecard],
    [2950, Packet.TransferInventory],
    [2960, Packet.TransferInventoryAck],
    [2970, Packet.AcceptFriendship],
    [2980, Packet.DeclineFriendship],
    [2990, Packet.FormFriendship],
    [3000, Packet.TerminateFriendship],
    [3010, Packet.OfferCallingCard],
    [3020, Packet.AcceptCallingCard],
    [3030, Packet.DeclineCallingCard],
    [3040, Packet.RezScript],
    [3050, Packet.CreateInventoryItem],
    [3060, Packet.CreateLandmarkForEvent],
    [3070, Packet.EventLocationRequest],
    [3080, Packet.EventLocationReply],
    [3090, Packet.RegionHandleRequest],
    [3100, Packet.RegionIDAndHandleReply],
    [3110, Packet.MoneyTransferRequest],
    [3120, Packet.MoneyTransferBackend],
    [3130, Packet.MoneyBalanceRequest],
    [3140, Packet.MoneyBalanceReply],
    [3150, Packet.RoutedMoneyBalanceReply],
    [3160, Packet.ActivateGestures],
    [3170, Packet.DeactivateGestures],
    [3180, Packet.MuteListUpdate],
    [3190, Packet.UseCachedMuteList],
    [3200, Packet.GrantUserRights],
    [3210, Packet.ChangeUserRights],
    [3220, Packet.OnlineNotification],
    [3230, Packet.OfflineNotification],
    [3240, Packet.SetStartLocationRequest],
    [3250, Packet.SetStartLocation],
    [3260, Packet.NetTest],
    [3270, Packet.SetCPURatio],
    [3280, Packet.SimCrashed],
    [3290, Packet.NameValuePair],
    [3300, Packet.RemoveNameValuePair],
    [3310, Packet.UpdateAttachment],
    [3320, Packet.RemoveAttachment],
    [3330, Packet.AssetUploadRequest],
    [3340, Packet.AssetUploadComplete],
    [3350, Packet.EmailMessageRequest],
    [3360, Packet.EmailMessageReply],
    [3370, Packet.ScriptDataRequest],
    [3380, Packet.ScriptDataReply],
    [3390, Packet.CreateGroupRequest],
    [3400, Packet.CreateGroupReply],
    [3410, Packet.UpdateGroupInfo],
    [3420, Packet.GroupRoleChanges],
    [3430, Packet.JoinGroupRequest],
    [3440, Packet.JoinGroupReply],
    [3450, Packet.EjectGroupMemberRequest],
    [3460, Packet.EjectGroupMemberReply],
    [3470, Packet.LeaveGroupRequest],
    [3480, Packet.LeaveGroupReply],
    [3490, Packet.InviteGroupRequest],
    [3500, Packet.InviteGroupResponse],
    [3510, Packet.GroupProfileRequest],
    [3520, Packet.GroupProfileReply],
    [3530, Packet.GroupAccountSummaryRequest],
    [3540, Packet.GroupAccountSummaryReply],
    [3550, Packet.GroupAccountDetailsRequest],
    [3560, Packet.GroupAccountDetailsReply],
    [3570, Packet.GroupAccountTransactionsRequest],
    [3580, Packet.GroupAccountTransactionsReply],
    [3590, Packet.GroupActiveProposalsRequest],
    [3600, Packet.GroupActiveProposalItemReply],
    [3610, Packet.GroupVoteHistoryRequest],
    [3620, Packet.GroupVoteHistoryItemReply],
    [3650, Packet.TallyVotes],
    [3660, Packet.GroupMembersRequest],
    [3670, Packet.GroupMembersReply],
    [3680, Packet.ActivateGroup],
    [3690, Packet.SetGroupContribution],
    [3700, Packet.SetGroupAcceptNotices],
    [3710, Packet.GroupRoleDataRequest],
    [3720, Packet.GroupRoleDataReply],
    [3730, Packet.GroupRoleMembersRequest],
    [3740, Packet.GroupRoleMembersReply],
    [3750, Packet.GroupTitlesRequest],
    [3760, Packet.GroupTitlesReply],
    [3770, Packet.GroupTitleUpdate],
    [3780, Packet.GroupRoleUpdate],
    [3790, Packet.LiveHelpGroupRequest],
    [3800, Packet.LiveHelpGroupReply],
    [3810, Packet.AgentWearablesRequest],
    [3820, Packet.AgentWearablesUpdate],
    [3830, Packet.AgentIsNowWearing],
    [3840, Packet.AgentCachedTexture],
    [3850, Packet.AgentCachedTextureResponse],
    [3860, Packet.AgentDataUpdateRequest],
    [3870, Packet.AgentDataUpdate],
    [3880, Packet.GroupDataUpdate],
    [3910, Packet.LogTextMessage],
    [3920, Packet.CreateTrustedCircuit],
    [3930, Packet.DenyTrustedCircuit],
    [3940, Packet.RequestTrustedCircuit],
    [3950, Packet.RezSingleAttachmentFromInv],
    [3960, Packet.RezMultipleAttachmentsFromInv],
    [3970, Packet.DetachAttachmentIntoInv],
    [3980, Packet.CreateNewOutfitAttachments],
    [3990, Packet.UserInfoRequest],
    [4000, Packet.UserInfoReply],
    [4010, Packet.UpdateUserInfo],
    [4020, Packet.ParcelRename],
    [4030, Packet.InitiateDownload],
    [4040, Packet.SystemMessage],
    [4050, Packet.MapLayerRequest],
    [4060, Packet.MapLayerReply],
    [4070, Packet.MapBlockRequest],
    [4080, Packet.MapNameRequest],
    [4090, Packet.MapBlockReply],
    [4100, Packet.MapItemRequest],
    [4110, Packet.MapItemReply],
    [4120, Packet.SendPostcard],
    [4130, Packet.RpcChannelRequest],
    [4140, Packet.RpcChannelReply],
    [4150, Packet.RpcScriptRequestInbound],
    [4170, Packet.RpcScriptReplyInbound],
    [4180, Packet.ScriptMailRegistration],
    [4190, Packet.ParcelMediaCommandMessage],
    [4200, Packet.ParcelMediaUpdate],
    [4210, Packet.LandStatRequest],
    [4230, Packet.GenericError],
    [4240, Packet.ObjectIncludeInSearch],
    [4260, Packet.LinkInventoryItem],
    [42949672913, Packet.PacketAck],
    [42949672923, Packet.OpenCircuit],
    [42949672933, Packet.CloseCircuit]
  ])

  static find (id) {
    return this.lookup.get(id)
  }
}

export default PacketLookup
