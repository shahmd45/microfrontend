async function loadRemote(url: string, globalName: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.getElementById(globalName)) return resolve();

    const script = document.createElement('script');
    script.src = url;
    script.id = globalName;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load remote: ${url}`));
    document.head.appendChild(script);
  });
}

await loadRemote(
  'http://localhost:3006/_next/static/chunks/remoteEntry.js',
  'paymentApp'
);

import('./index.tsx');
