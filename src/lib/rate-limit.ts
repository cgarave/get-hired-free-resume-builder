const requests = new Map<string, number>();

export function canMakeRequest(ip: string) {
  const now = Date.now();
  const lastRequest = requests.get(ip);

  if (!lastRequest) {
    requests.set(ip, now);
    return true;
  }

  const cooldown = 1000 * 30; // 30 seconds

  if (now - lastRequest > cooldown) {
    requests.set(ip, now);
    return true;
  }

  return false;
}