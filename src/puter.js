// puter.js
import { file, dir } from "puter-js";

const CHAT_DIR = "conversations";

export async function ensureChatDir() {
  try {
    await dir.create(CHAT_DIR);
  } catch {}
}

export async function saveConversation(messages) {
  await ensureChatDir();
  const timestamp = Date.now();
  await file.write(`${CHAT_DIR}/chat-${timestamp}.json`, JSON.stringify(messages));
}

export async function loadConversation(path) {
  const json = await file.read(path);
  return JSON.parse(json);
}

export async function listConversations() {
  await ensureChatDir();
  const files = await dir.list(CHAT_DIR);
  return files.filter(f => f.name.endsWith(".json"));
}
