// 主题系统
const ThemeSystem = {
  // 主题模式
  themes: {
    light: {
      '--bg-color': '#ffffff',
      '--text-color': '#333333',
      '--primary-color': 'rgba(14, 144, 210, .9)',
      '--primary-hover': 'rgba(14, 144, 210, 1)',
      '--secondary-color': 'rgba(14, 144, 210, .8)',
      '--input-bg': '#f5f5f5',
      '--input-border': 'rgba(14, 144, 210, .8)',
      '--card-bg': '#f9f9f9',
      '--history-bg': '#ffffff',
      '--history-text': '#333333',
      '--video-bg': '#000000'
    },
    dark: {
      '--bg-color': '#121212',
      '--text-color': '#ffffff',
      '--primary-color': 'rgba(14, 144, 210, .9)',
      '--primary-hover': 'rgba(14, 144, 210, 1)',
      '--secondary-color': 'rgba(14, 144, 210, .8)',
      '--input-bg': 'rgba(255, 255, 255, 0.1)',
      '--input-border': 'rgba(14, 144, 210, .8)',
      '--card-bg': 'rgba(255, 255, 255, 0.1)',
      '--history-bg': '#2a2a2a',
      '--history-text': '#ffffff',
      '--video-bg': '#000000'
    }
  },

  // 初始化主题
  init() {
    // 从localStorage获取主题偏好
    const savedTheme = this.getSavedTheme();
    this.applyTheme(savedTheme);

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      const currentTheme = this.getSavedTheme();
      if (currentTheme === 'system') {
        this.applyTheme('system');
      }
    });
  },

  // 获取保存的主题偏好
  getSavedTheme() {
    try {
      const saved = localStorage.getItem('themePreference');
      return saved ? JSON.parse(saved) : 'system';
    } catch (e) {
      return 'system';
    }
  },

  // 保存主题偏好
  saveTheme(theme) {
    try {
      localStorage.setItem('themePreference', JSON.stringify(theme));
    } catch (e) {
      console.error('Failed to save theme preference:', e);
    }
  },

  // 应用主题
  applyTheme(theme) {
    // 确定要使用的主题
    let targetTheme;
    if (theme === 'system') {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      targetTheme = isDarkMode ? 'dark' : 'light';
    } else {
      targetTheme = theme;
    }

    // 应用主题变量
    const themeColors = this.themes[targetTheme];
    for (const [key, value] of Object.entries(themeColors)) {
      document.documentElement.style.setProperty(key, value);
    }

    // 保存主题偏好
    this.saveTheme(theme);
  },

  // 切换主题
  toggleTheme() {
    const currentTheme = this.getSavedTheme();
    let newTheme;
    switch (currentTheme) {
      case 'light':
        newTheme = 'dark';
        break;
      case 'dark':
        newTheme = 'system';
        break;
      case 'system':
      default:
        newTheme = 'light';
        break;
    }
    this.applyTheme(newTheme);
    return newTheme;
  }
};

// 页面加载时初始化主题
document.addEventListener('DOMContentLoaded', () => {
  ThemeSystem.init();

  // 主题选择按钮事件
  const themeBtn = document.getElementById('theme_btn');
  const themeDropdown = document.getElementById('theme_dropdown');
  if (themeBtn && themeDropdown) {
    // 切换下拉菜单显示
    themeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      themeDropdown.classList.toggle('show');
      // 关闭语言下拉菜单
      const languageDropdown = document.getElementById('language_dropdown');
      if (languageDropdown) {
        languageDropdown.classList.remove('show');
      }
    });

    // 主题选择
    const themeOptions = themeDropdown.querySelectorAll('a');
    themeOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const theme = e.target.getAttribute('data-theme');
        ThemeSystem.applyTheme(theme);
        themeDropdown.classList.remove('show');
        // 更新按钮文本
        if (typeof i18next !== 'undefined') {
          themeBtn.textContent = i18next.t('theme');
        }
      });
    });
  }

  // 点击其他地方关闭下拉菜单
  document.addEventListener('click', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('show');
    });
  });
});