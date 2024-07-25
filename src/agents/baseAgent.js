import { getApiKey } from '../utils/agents';
import { v4 as uuidv4 } from 'uuid';
import { AGENT_STATUS_enum } from '../utils/enums';


class BaseAgent {
    constructor({ name, role, goal, background, tools, llmConfig = {}, maxIterations = 10 }) {
        this.id = uuidv4();
        this.name = name;
        this.role = role;
        this.goal = goal;
        this.background = background;
        this.tools = tools;
        this.maxIterations = maxIterations;
        this.store = null;
        this.status = AGENT_STATUS_enum.INITIAL;
        this.env = null;
        this.llmConfig = llmConfig;
    }

    async initAgent() {
        throw new Error("initAgent must be implemented by subclasses.");
    }

    setStore(store) {
        this.store = store;
    }

    setStatus(status) {
        this.status = status;
    }

    setEnv(env) {
        this.env = env;
    }

    executeTask(task) {
        throw new Error("executeTask must be implemented by subclasses.");
    }
}

export { BaseAgent };