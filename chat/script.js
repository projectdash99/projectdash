// ===== THEME TOGGLE =====
const body = document.body;
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  body.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
});

// ===== MODEL DROPDOWN =====
const modelSelector = document.getElementById('modelSelector');
const modelDropdown = document.getElementById('modelDropdown');
const modelName = document.getElementById('modelName');

modelSelector.addEventListener('click', (e) => {
  e.stopPropagation();
  modelDropdown.classList.toggle('open');
});
const composerModelChip = document.getElementById('composerModelChip');
if (composerModelChip) {
  composerModelChip.addEventListener('click', (e) => {
    e.stopPropagation();
    modelDropdown.classList.toggle('open');
  });
}

modelDropdown.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    modelName.textContent = btn.dataset.model;
    if (composerModelChip) {
      composerModelChip.innerHTML = `<span class="model-dot"></span> ${btn.dataset.model} <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
    modelDropdown.classList.remove('open');
  });
});

document.addEventListener('click', () => modelDropdown.classList.remove('open'));

// ===== SIDEBAR DRAWER (mobile) =====
const sidebar = document.getElementById('sidebar');
const drawerBtn = document.getElementById('drawerBtn');
drawerBtn.addEventListener('click', () => sidebar.classList.toggle('drawer-open'));

// ===== SIDEBAR COLLAPSE (desktop) =====
const collapseSidebarBtn = document.getElementById('collapseSidebarBtn');
if (collapseSidebarBtn) {
  collapseSidebarBtn.addEventListener('click', () => {
    app.classList.toggle('sidebar-collapsed');
  });
}

// ===== RIGHT PANEL =====
const app = document.querySelector('.app');
const closeRightPanel = document.getElementById('closeRightPanel');
const openRightPanelBtn = document.getElementById('openRightPanelBtn');

app.classList.add('panel-open'); // shown by default on desktop for the demo
closeRightPanel.addEventListener('click', () => app.classList.remove('panel-open'));
if (openRightPanelBtn) {
  openRightPanelBtn.addEventListener('click', () => app.classList.add('panel-open'));
}

// ===== CHIP TOGGLES =====
document.getElementById('searchToggle').addEventListener('click', function () {
  this.classList.toggle('active');
});
document.getElementById('reasonToggle').addEventListener('click', function () {
  this.classList.toggle('active');
});

// ===== EMPTY STATE -> CHAT VIEW TRANSITION =====
const emptyState = document.getElementById('emptyState');
const chatView = document.getElementById('chatView');
const composerInput = document.getElementById('composerInput');
const sendBtn = document.getElementById('sendBtn');
const chatScroll = document.getElementById('chatScroll');

function goToChatView() {
  if (chatView.classList.contains('visible')) return;
  emptyState.style.display = 'none';
  chatView.classList.add('visible');
  chatScroll.scrollTop = chatScroll.scrollHeight;
}

// Auto-resize textarea
composerInput.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});

// Quick action cards also jump into the chat view (demo behavior)
document.querySelectorAll('.quick-card').forEach(card => {
  card.addEventListener('click', () => {
    composerInput.value = card.textContent + ': ';
    goToChatView();
  });
});

function sendMessage() {
  const text = composerInput.value.trim();
  if (!text) { goToChatView(); return; }

  goToChatView();

  const userMsg = document.createElement('div');
  userMsg.className = 'msg msg-user';
  userMsg.innerHTML = `<p></p>`;
  userMsg.querySelector('p').textContent = text;
  chatScroll.appendChild(userMsg);
  composerInput.value = '';
  composerInput.style.height = 'auto';
  chatScroll.scrollTop = chatScroll.scrollHeight;

  // Simulated streaming assistant reply (placeholder for real API call)
  setTimeout(() => {
    const typing = document.createElement('div');
    typing.className = 'msg msg-assistant typing';
    typing.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    chatScroll.appendChild(typing);
    chatScroll.scrollTop = chatScroll.scrollHeight;

    setTimeout(() => {
      typing.remove();
      const reply = document.createElement('div');
      reply.className = 'msg msg-assistant';
      reply.innerHTML = '<p>This is a placeholder response — wire this up to the Vercel AI SDK streaming endpoint to replace it with real model output.</p>';
      chatScroll.appendChild(reply);
      chatScroll.scrollTop = chatScroll.scrollHeight;
    }, 1200);
  }, 500);
}

sendBtn.addEventListener('click', sendMessage);
composerInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});
