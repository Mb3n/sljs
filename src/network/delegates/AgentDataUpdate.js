import Delegate from './Delegate'

class AgentDataUpdate extends Delegate {
  async handle (packet) {
    const data = packet.data.agentData[0]
    const agent = this.client.agent

    agent.id = data.agent
    agent.firstname = data.firstName
    agent.lastname = data.lastName

    /*
      agent.group = {
        id: data.activeGroup,
        name: data.groupName,
        title: data.groupTitle,
        permissions: data.groupPowers
      }
    */
  }
}

export default AgentDataUpdate
