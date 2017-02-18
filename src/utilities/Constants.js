export const Events = {
  DEBUG: 'debug',
  WARNING: 'warning'
}

export const Errors = {
  ALREADY_CONNECTED: 'Client is already connected, disconnect first.',
  BAD_LOGIN: 'Incorrect login details were provided.',
  LOGIN_FAILED: 'Login failed, may be due to bad credentials, pending logout, or external factors.',
  UNKNOWN_PACKET_ID: 'Unknown packet, needs to be defined within the packets utility file, and tested if nessecery: ',
  INACTIVE_CIRCUIT: 'Cannot send packets over inactive circuit.',
  HANDSHAKE_ACTIVE_CIRCUIT: 'Cannot send handshake to active circuit.',
  MISSING_BLOCK: 'Missing packet block, packet will not be sent.',
  MISSING_PARAMETER: 'Missing packet parameters, packet will not be sent.'
}

export const Status = {
  READY: 0,
  CONNECTING: 1,
  RECONNECTING: 2,
  IDLE: 3,
  DISCONNECTED: 4
}

export const Endpoints = {
  LOGIN_URL: 'https://login.agni.lindenlab.com/cgi-bin/login.cgi'
}
