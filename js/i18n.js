// 语言本地化系统
const I18nSystem = {
  // 初始化i18next
  init() {
    // 从localStorage获取语言偏好
    const savedLanguage = this.getSavedLanguage();

    // 初始化i18next
    i18next.init({
      lng: savedLanguage,
      fallbackLng: 'zh-CN',
      resources: {
        'zh-CN': {
          translation: {
            // 通用
            'home': '首页',
            'about': '关于我们',
            'principle': '视频播放原理',
            'help': '帮助中心',
            'terms': '服务条款',
            'contact': '联系我们',
            'settings': '设置',
            'save': '保存设置',
            'saved': '设置已保存',
            'language': '语言',
            'theme': '主题',
            
            // 首页
            'enter_url': '请输入视频播放地址(支持m3u8、flv、mp4等)',
            'online_player': '在线视频播放器',
            
            // 关于我们
            'about_us': '关于我们',
            'about_content': '在线视频播放器是一个专业的视频播放工具，致力于为用户提供流畅、稳定的在线视频播放体验。我们的平台支持多种视频格式，包括m3u8、flv、mp4等，让用户可以轻松播放各种网络视频资源。',
            'team_intro': '我们的团队由一群热爱技术的开发者组成，拥有丰富的视频处理和流媒体技术经验。我们不断优化播放器性能，提升用户体验，为用户打造一个简洁、高效的视频播放工具。',
            'mission': '我们的使命是通过技术创新，让视频播放变得更加简单、高效，为用户带来更好的观看体验。我们相信，优质的视频播放服务能够丰富人们的数字生活，让信息传递更加便捷。',
            'feedback': '如果您对我们的服务有任何建议或意见，欢迎随时联系我们，我们将不断改进，为您提供更好的服务。',
            
            // 视频播放原理
            'video_principle': '视频在线播放原理',
            'principle_intro': '视频在线播放是一个复杂的技术过程，涉及多个环节的协同工作。以下是视频在线播放的核心技术原理：',
            'streaming_protocol': '1. 流媒体传输协议',
            'protocol_content': '流媒体传输协议是视频在线播放的基础，主要包括以下几种：',
            'hls': 'HLS (HTTP Live Streaming)：由苹果公司开发，基于HTTP协议，将视频分割成多个小片段进行传输，支持自适应码率。',
            'dash': 'DASH (Dynamic Adaptive Streaming over HTTP)：国际标准，同样基于HTTP协议，支持更灵活的自适应码率调整。',
            'rtmp': 'RTMP (Real-Time Messaging Protocol)：由Adobe开发，基于TCP协议，延迟较低，适合实时直播。',
            'webrtc': 'WebRTC：支持浏览器间的实时通信，延迟极低，适合实时互动场景。',
            'video_codec': '2. 视频编码解码技术',
            'codec_content': '视频编码解码是视频压缩和还原的关键技术：',
            'codec_standards': '编码标准：常见的编码标准包括H.264/AVC、H.265/HEVC、VP9、AV1等，它们通过不同的算法实现视频数据的高效压缩。',
            'encoding_process': '编码过程：包括帧内预测、帧间预测、变换编码、量化、熵编码等步骤，将原始视频数据压缩为较小的文件。',
            'decoding_process': '解码过程：将压缩的视频数据还原为原始视频信号，供播放器显示。',
            'buffering': '3. 缓冲机制',
            'buffering_content': '缓冲机制是保证视频流畅播放的重要技术：',
            'pre_buffering': '预缓冲：在视频开始播放前，预先下载一定量的视频数据，避免播放时出现卡顿。',
            'dynamic_buffering': '动态缓冲：根据网络状况动态调整缓冲大小，在网络好时增加缓冲，在网络差时减少缓冲。',
            'adaptive_bitrate': '自适应码率：根据网络带宽自动切换视频清晰度，保证播放流畅性。',
            'player_architecture': '4. 播放器架构',
            'architecture_content': '现代视频播放器通常采用以下架构：',
            'network_layer': '网络层：负责从服务器获取视频数据，处理网络请求和响应。',
            'demux_layer': '解封装层：解析视频容器格式（如MP4、FLV、TS等），提取音视频流。',
            'decoding_layer': '解码层：使用硬件或软件解码器解码音视频数据。',
            'rendering_layer': '渲染层：将解码后的音视频数据渲染到屏幕和扬声器。',
            'control_layer': '控制层：处理用户交互，如播放、暂停、快进、音量调节等。',
            'common_issues': '5. 常见问题与解决方案',
            'issues_content': '视频在线播放中常见的问题及解决方案：',
            'buffering_issue': '卡顿：可能是网络带宽不足、服务器负载过高或设备性能不足导致。解决方案包括使用CDN加速、优化编码参数、升级设备等。',
            'delay_issue': '延迟：实时直播中延迟较高可能影响用户体验。解决方案包括使用低延迟协议（如WebRTC）、优化服务器架构等。',
            'quality_issue': '画质差：可能是编码码率过低或网络带宽不足导致。解决方案包括使用更高的编码码率、实现自适应码率等。',
            
            // 帮助中心
            'help_center': '帮助中心',
            'help_intro': '欢迎使用在线视频播放器帮助中心，这里提供了常见问题的解答，帮助您更好地使用我们的服务。',
            'common_questions': '常见问题',
            'supported_formats': '1. 支持哪些视频格式？',
            'formats_answer': '我们的播放器支持多种视频格式，包括m3u8、flv、mp4等常见格式。如果您遇到无法播放的格式，可以尝试转换为支持的格式后再播放。',
            'how_to_play': '2. 如何播放网络视频？',
            'play_answer': '在首页的输入框中输入视频的完整URL地址，然后点击播放按钮即可开始播放。请确保视频地址是可访问的，并且格式是我们支持的。',
            'buffering_solution': '3. 播放时出现卡顿怎么办？',
            'buffering_solution_answer': '播放卡顿可能是由以下原因导致的：',
            'network_issue': '网络带宽不足：请检查您的网络连接，确保网络速度稳定。',
            'source_issue': '视频源问题：视频源服务器可能负载过高或不稳定，尝试更换其他视频源。',
            'device_issue': '设备性能不足：如果您的设备性能较低，可能无法流畅播放高清视频，尝试降低视频清晰度。',
            'clear_history': '4. 如何清除播放历史？',
            'clear_history_answer': '播放历史存储在您的浏览器本地，您可以通过以下方式清除：',
            'browser_settings': '在浏览器设置中清除浏览数据，选择清除缓存和本地存储。',
            'incognito_mode': '使用浏览器的隐私模式访问我们的网站，这样不会留下播放历史。',
            'playback_failure': '5. 为什么视频无法播放？',
            'playback_failure_answer': '视频无法播放可能有以下原因：',
            'url_error': '视频地址错误：请检查输入的视频地址是否正确。',
            'source_unavailable': '视频源不可访问：视频源可能已经被删除或限制访问。',
            'browser_unsupported': '浏览器不支持：请使用现代浏览器，如Chrome、Firefox、Safari等。',
            'network_connection': '网络连接问题：请检查您的网络连接是否正常。',
            'supported_browsers': '6. 支持哪些浏览器？',
            'browsers_answer': '我们的播放器支持主流的现代浏览器，包括：',
            'chrome': 'Google Chrome',
            'firefox': 'Mozilla Firefox',
            'safari': 'Apple Safari',
            'edge': 'Microsoft Edge',
            'browser_recommendation': '建议使用最新版本的浏览器以获得最佳体验。',
            'quality_adjustment': '7. 如何调整视频播放质量？',
            'quality_answer': '如果视频源支持多种清晰度，您可以通过视频播放器的控制栏调整播放质量。如果视频源只提供一种清晰度，则无法调整。',
            'subtitles_support': '8. 播放器是否支持 subtitles？',
            'subtitles_answer': '我们的播放器支持视频自带的字幕轨道。如果视频包含字幕，您可以通过播放器控制栏开启或关闭字幕。',
            
            // 服务条款
            'terms_privacy': '服务条款与隐私政策',
            'terms_of_service': '服务条款',
            'terms_intro': '欢迎使用在线视频播放器服务。通过使用我们的服务，您同意遵守以下条款和条件：',
            'service_content': '1. 服务内容',
            'service_description': '在线视频播放器提供视频播放服务，支持多种视频格式，包括m3u8、flv、mp4等。我们仅提供视频播放功能，不存储或分发任何视频内容。',
            'user_responsibility': '2. 用户责任',
            'user_rules': '您在使用我们的服务时，应遵守以下规定：',
            'legal_content': '仅播放合法获得的视频内容，不得侵犯他人的知识产权或其他合法权益。',
            'no_illegal_content': '不得使用我们的服务播放任何违法、色情、暴力或其他不良内容。',
            'no_illegal_activities': '不得利用我们的服务从事任何违法活动。',
            'disclaimer': '3. 免责声明',
            'disclaimer_content': '我们不对以下情况负责：',
            'content_disclaimer': '视频内容的合法性、准确性、完整性或质量。',
            'service_interruption': '因网络连接问题、设备故障或其他不可抗力因素导致的服务中断或播放异常。',
            'user_losses': '因用户使用我们的服务而产生的任何直接或间接损失。',
            'service_changes': '4. 服务变更',
            'changes_content': '我们保留随时修改、暂停或终止服务的权利，无需事先通知用户。',
            'terms_modification': '5. 条款修改',
            'modification_content': '我们可能会不时修改本服务条款，修改后的条款将在网站上公布。继续使用我们的服务即表示您接受修改后的条款。',
            'privacy_policy': '隐私政策',
            'privacy_intro': '我们重视用户隐私，致力于保护用户的个人信息。以下是我们的隐私政策：',
            'information_collection': '1. 信息收集',
            'collection_content': '我们可能收集以下信息：',
            'play_history': '播放历史：我们会在您的浏览器本地存储您的播放历史，方便您下次使用。',
            'device_info': '设备信息：我们可能收集您的设备类型、浏览器类型等信息，以优化服务体验。',
            'usage_data': '使用数据：我们可能收集您使用服务的方式和频率，以改进服务质量。',
            'information_usage': '2. 信息使用',
            'usage_content': '我们收集的信息仅用于以下目的：',
            'service_improvement': '提供和改进我们的服务。',
            'user_experience': '优化用户体验。',
            'usage_analysis': '分析服务使用情况。',
            'information_sharing': '3. 信息共享',
            'sharing_content': '我们不会向第三方共享您的个人信息，除非：',
            'legal_requirement': '法律要求我们这样做。',
            'protect_rights': '为了保护我们的权利、财产或安全。',
            'user_permission': '获得您的明确许可。',
            'information_security': '4. 信息安全',
            'security_content': '我们采取合理的安全措施保护您的信息，防止未经授权的访问、使用或披露。',
            'cookie_policy': '5. Cookie政策',
            'cookie_content': '我们可能使用Cookie来存储用户偏好和其他信息，以提升服务体验。您可以在浏览器设置中禁用Cookie，但这可能会影响服务的正常使用。',
            'privacy_modification': '6. 隐私政策修改',
            'privacy_modification_content': '我们可能会不时修改本隐私政策，修改后的政策将在网站上公布。继续使用我们的服务即表示您接受修改后的隐私政策。',
            
            // 联系我们
            'contact_us': '联系我们',
            'contact_intro': '如果您有任何问题、建议或反馈，欢迎通过以下方式与我们联系：',
            'contact_methods': '联系方式',
            'email': '电子邮件：contact@onlineplayer.com',
            'wechat': '微信：OnlinePlayer',
            'qq': 'QQ：123456789',
            'feedback_form': '反馈表单',
            'form_intro': '您也可以通过以下表单提交您的反馈：',
            'name': '姓名：',
            'email_label': '电子邮件：',
            'subject': '主题：',
            'message': '消息：',
            'submit': '提交',
            'faq_reference': '常见问题',
            'faq_link': '如果您有常见问题，请先查看我们的帮助中心，那里可能已经有您需要的答案。',
            
            // 设置页面
            'settings_page': '设置',
            'theme_settings': '主题设置',
            'select_theme': '选择主题：',
            'light_mode': '浅色模式',
            'dark_mode': '深色模式',
            'system_mode': '系统跟随模式',
            'language_settings': '语言设置',
            'select_language': '选择语言：',
            'chinese': '简体中文',
            'english': 'English'
          }
        },
        'en-US': {
          translation: {
            // Common
            'home': 'Home',
            'about': 'About Us',
            'principle': 'Video Playback Principle',
            'help': 'Help Center',
            'terms': 'Terms of Service',
            'contact': 'Contact Us',
            'settings': 'Settings',
            'save': 'Save Settings',
            'saved': 'Settings saved',
            'language': 'Language',
            'theme': 'Theme',
            
            // Home page
            'enter_url': 'Please enter video URL (supports m3u8, flv, mp4, etc.)',
            'online_player': 'Online Video Player',
            
            // About Us
            'about_us': 'About Us',
            'about_content': 'Online Video Player is a professional video playback tool dedicated to providing users with a smooth and stable online video playback experience. Our platform supports multiple video formats, including m3u8, flv, mp4, etc., allowing users to easily play various online video resources.',
            'team_intro': 'Our team consists of a group of technology-loving developers with rich experience in video processing and streaming media technology. We continuously optimize player performance, improve user experience, and create a simple and efficient video playback tool for users.',
            'mission': 'Our mission is to make video playback simpler and more efficient through technological innovation, bringing better viewing experience to users. We believe that high-quality video playback services can enrich people\'s digital lives and make information transmission more convenient.',
            'feedback': 'If you have any suggestions or comments about our service, please feel free to contact us at any time. We will continue to improve to provide you with better service.',
            
            // Video Playback Principle
            'video_principle': 'Online Video Playback Principle',
            'principle_intro': 'Online video playback is a complex technical process involving the coordination of multiple links. Here are the core technical principles of online video playback:',
            'streaming_protocol': '1. Streaming Media Transmission Protocol',
            'protocol_content': 'Streaming media transmission protocol is the foundation of online video playback, mainly including the following:',
            'hls': 'HLS (HTTP Live Streaming): Developed by Apple, based on HTTP protocol, splits video into multiple small segments for transmission, supports adaptive bitrate.',
            'dash': 'DASH (Dynamic Adaptive Streaming over HTTP): International standard, also based on HTTP protocol, supports more flexible adaptive bitrate adjustment.',
            'rtmp': 'RTMP (Real-Time Messaging Protocol): Developed by Adobe, based on TCP protocol, with low latency, suitable for live streaming.',
            'webrtc': 'WebRTC: Supports real-time communication between browsers, with extremely low latency, suitable for real-time interactive scenarios.',
            'video_codec': '2. Video Coding and Decoding Technology',
            'codec_content': 'Video coding and decoding is the key technology for video compression and restoration:',
            'codec_standards': 'Coding standards: Common coding standards include H.264/AVC, H.265/HEVC, VP9, AV1, etc., which achieve efficient compression of video data through different algorithms.',
            'encoding_process': 'Encoding process: Including intra-frame prediction, inter-frame prediction, transform coding, quantization, entropy coding and other steps, compressing original video data into smaller files.',
            'decoding_process': 'Decoding process: Restores compressed video data to original video signals for display by the player.',
            'buffering': '3. Buffering Mechanism',
            'buffering_content': 'Buffering mechanism is an important technology to ensure smooth video playback:',
            'pre_buffering': 'Pre-buffering: Before the video starts playing, pre-download a certain amount of video data to avoid stuttering during playback.',
            'dynamic_buffering': 'Dynamic buffering: Dynamically adjust the buffer size according to network conditions, increase buffer when network is good, reduce buffer when network is poor.',
            'adaptive_bitrate': 'Adaptive bitrate: Automatically switch video clarity according to network bandwidth to ensure playback fluency.',
            'player_architecture': '4. Player Architecture',
            'architecture_content': 'Modern video players usually adopt the following architecture:',
            'network_layer': 'Network layer: Responsible for obtaining video data from the server, processing network requests and responses.',
            'demux_layer': 'Demux layer: Parses video container formats (such as MP4, FLV, TS, etc.), extracts audio and video streams.',
            'decoding_layer': 'Decoding layer: Uses hardware or software decoders to decode audio and video data.',
            'rendering_layer': 'Rendering layer: Renders decoded audio and video data to the screen and speakers.',
            'control_layer': 'Control layer: Handles user interactions, such as play, pause, fast forward, volume adjustment, etc.',
            'common_issues': '5. Common Issues and Solutions',
            'issues_content': 'Common issues in online video playback and their solutions:',
            'buffering_issue': 'Stuttering: May be caused by insufficient network bandwidth, high server load, or insufficient device performance. Solutions include using CDN acceleration, optimizing encoding parameters, upgrading devices, etc.',
            'delay_issue': 'Delay: High delay in live streaming may affect user experience. Solutions include using low-latency protocols (such as WebRTC), optimizing server architecture, etc.',
            'quality_issue': 'Poor video quality: May be caused by low encoding bitrate or insufficient network bandwidth. Solutions include using higher encoding bitrate, implementing adaptive bitrate, etc.',
            
            // Help Center
            'help_center': 'Help Center',
            'help_intro': 'Welcome to the Online Video Player Help Center. Here you can find answers to common questions to help you better use our service.',
            'common_questions': 'Common Questions',
            'supported_formats': '1. What video formats are supported?',
            'formats_answer': 'Our player supports multiple video formats, including m3u8, flv, mp4 and other common formats. If you encounter an unsupported format, you can try converting it to a supported format before playing.',
            'how_to_play': '2. How to play online videos?',
            'play_answer': 'Enter the complete URL of the video in the input box on the homepage, then click the play button to start playing. Please ensure that the video address is accessible and the format is supported by us.',
            'buffering_solution': '3. What to do if playback stutters?',
            'buffering_solution_answer': 'Playback stuttering may be caused by the following reasons:',
            'network_issue': 'Insufficient network bandwidth: Please check your network connection to ensure stable network speed.',
            'source_issue': 'Video source problem: The video source server may be overloaded or unstable, try replacing with another video source.',
            'device_issue': 'Insufficient device performance: If your device performance is low, it may not be able to play HD videos smoothly, try reducing video clarity.',
            'clear_history': '4. How to clear playback history?',
            'clear_history_answer': 'Playback history is stored locally in your browser. You can clear it in the following ways:',
            'browser_settings': 'Clear browsing data in browser settings, select to clear cache and local storage.',
            'incognito_mode': 'Use the browser\'s incognito mode to access our website, which will not leave playback history.',
            'playback_failure': '5. Why can\'t the video play?',
            'playback_failure_answer': 'Video playback failure may have the following reasons:',
            'url_error': 'Incorrect video address: Please check if the entered video address is correct.',
            'source_unavailable': 'Video source unavailable: The video source may have been deleted or restricted access.',
            'browser_unsupported': 'Browser not supported: Please use modern browsers such as Chrome, Firefox, Safari, etc.',
            'network_connection': 'Network connection problem: Please check if your network connection is normal.',
            'supported_browsers': '6. Which browsers are supported?',
            'browsers_answer': 'Our player supports mainstream modern browsers, including:',
            'chrome': 'Google Chrome',
            'firefox': 'Mozilla Firefox',
            'safari': 'Apple Safari',
            'edge': 'Microsoft Edge',
            'browser_recommendation': 'It is recommended to use the latest version of the browser for the best experience.',
            'quality_adjustment': '7. How to adjust video playback quality?',
            'quality_answer': 'If the video source supports multiple resolutions, you can adjust the playback quality through the player\'s control bar. If the video source only provides one resolution, it cannot be adjusted.',
            'subtitles_support': '8. Does the player support subtitles?',
            'subtitles_answer': 'Our player supports subtitle tracks included in the video. If the video contains subtitles, you can turn them on or off through the player control bar.',
            
            // Terms of Service
            'terms_privacy': 'Terms of Service and Privacy Policy',
            'terms_of_service': 'Terms of Service',
            'terms_intro': 'Welcome to use Online Video Player service. By using our service, you agree to comply with the following terms and conditions:',
            'service_content': '1. Service Content',
            'service_description': 'Online Video Player provides video playback services, supporting multiple video formats, including m3u8, flv, mp4, etc. We only provide video playback functionality and do not store or distribute any video content.',
            'user_responsibility': '2. User Responsibility',
            'user_rules': 'When using our service, you should comply with the following regulations:',
            'legal_content': 'Only play legally obtained video content, and do not infringe on the intellectual property rights or other legitimate rights and interests of others.',
            'no_illegal_content': 'Do not use our service to play any illegal, pornographic, violent or other harmful content.',
            'no_illegal_activities': 'Do not use our service to engage in any illegal activities.',
            'disclaimer': '3. Disclaimer',
            'disclaimer_content': 'We are not responsible for the following situations:',
            'content_disclaimer': 'The legality, accuracy, completeness or quality of video content.',
            'service_interruption': 'Service interruption or playback abnormality caused by network connection problems, device failures or other force majeure factors.',
            'user_losses': 'Any direct or indirect losses caused by users using our service.',
            'service_changes': '4. Service Changes',
            'changes_content': 'We reserve the right to modify, suspend or terminate the service at any time without prior notice to users.',
            'terms_modification': '5. Terms Modification',
            'modification_content': 'We may modify these service terms from time to time. The modified terms will be published on the website. Continuing to use our service means you accept the modified terms.',
            'privacy_policy': 'Privacy Policy',
            'privacy_intro': 'We value user privacy and are committed to protecting users\' personal information. Here is our privacy policy:',
            'information_collection': '1. Information Collection',
            'collection_content': 'We may collect the following information:',
            'play_history': 'Playback history: We will store your playback history locally in your browser for your convenience next time.',
            'device_info': 'Device information: We may collect your device type, browser type and other information to optimize service experience.',
            'usage_data': 'Usage data: We may collect how and how often you use the service to improve service quality.',
            'information_usage': '2. Information Usage',
            'usage_content': 'The information we collect is only used for the following purposes:',
            'service_improvement': 'Provide and improve our services.',
            'user_experience': 'Optimize user experience.',
            'usage_analysis': 'Analyze service usage.',
            'information_sharing': '3. Information Sharing',
            'sharing_content': 'We will not share your personal information with third parties unless:',
            'legal_requirement': 'The law requires us to do so.',
            'protect_rights': 'To protect our rights, property or safety.',
            'user_permission': 'With your explicit permission.',
            'information_security': '4. Information Security',
            'security_content': 'We take reasonable security measures to protect your information from unauthorized access, use or disclosure.',
            'cookie_policy': '5. Cookie Policy',
            'cookie_content': 'We may use cookies to store user preferences and other information to enhance service experience. You can disable cookies in browser settings, but this may affect the normal use of the service.',
            'privacy_modification': '6. Privacy Policy Modification',
            'privacy_modification_content': 'We may modify this privacy policy from time to time. The modified policy will be published on the website. Continuing to use our service means you accept the modified privacy policy.',
            
            // Contact Us
            'contact_us': 'Contact Us',
            'contact_intro': 'If you have any questions, suggestions or feedback, please feel free to contact us through the following methods:',
            'contact_methods': 'Contact Methods',
            'email': 'Email: contact@onlineplayer.com',
            'wechat': 'WeChat: OnlinePlayer',
            'qq': 'QQ: 123456789',
            'feedback_form': 'Feedback Form',
            'form_intro': 'You can also submit your feedback through the following form:',
            'name': 'Name:',
            'email_label': 'Email:',
            'subject': 'Subject:',
            'message': 'Message:',
            'submit': 'Submit',
            'faq_reference': 'Common Questions',
            'faq_link': 'If you have common questions, please check our Help Center first, where you may already find the answers you need.',
            
            // Settings Page
            'settings_page': 'Settings',
            'theme_settings': 'Theme Settings',
            'select_theme': 'Select Theme:',
            'light_mode': 'Light Mode',
            'dark_mode': 'Dark Mode',
            'system_mode': 'System Follow Mode',
            'language_settings': 'Language Settings',
            'select_language': 'Select Language:',
            'chinese': '简体中文',
            'english': 'English'
          }
        }
      }
    }, () => {
      // 初始化完成后更新页面文本
      this.updatePageText();
    });
  },

  // 获取保存的语言偏好
  getSavedLanguage() {
    try {
      const saved = localStorage.getItem('languagePreference');
      return saved ? JSON.parse(saved) : 'zh-CN';
    } catch (e) {
      return 'zh-CN';
    }
  },

  // 保存语言偏好
  saveLanguage(language) {
    try {
      localStorage.setItem('languagePreference', JSON.stringify(language));
    } catch (e) {
      console.error('Failed to save language preference:', e);
    }
  },

  // 切换语言
  changeLanguage(language) {
    i18next.changeLanguage(language, () => {
      this.saveLanguage(language);
      this.updatePageText();
    });
  },

  // 更新页面文本
  updatePageText() {
    // 更新导航菜单
    const navLinks = document.querySelectorAll('#nav_box a');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      switch (href) {
        case 'index.html':
          link.textContent = i18next.t('home');
          break;
        case 'about.html':
          link.textContent = i18next.t('about');
          break;
        case 'principle.html':
          link.textContent = i18next.t('principle');
          break;
        case 'help.html':
          link.textContent = i18next.t('help');
          break;
        case 'terms.html':
          link.textContent = i18next.t('terms');
          break;
        case 'contact.html':
          link.textContent = i18next.t('contact');
          break;
        case 'settings.html':
          link.textContent = i18next.t('settings');
          break;
      }
    });

    // 更新logo文本
    const logo = document.getElementById('logo_box');
    if (logo) {
      logo.textContent = i18next.t('online_player');
    }

    // 更新输入框占位符
    const urlBox = document.getElementById('url_box');
    if (urlBox) {
      urlBox.placeholder = i18next.t('enter_url');
    }

    // 更新内容区域
    this.updateContentText();
  },

  // 更新内容区域文本
  updateContentText() {
    // 根据当前页面更新文本
    const currentPage = window.location.pathname.split('/').pop();
    
    switch (currentPage) {
      case 'index.html':
        // 首页无需额外更新
        break;
      
      case 'about.html':
        this.updateAboutPage();
        break;
      
      case 'principle.html':
        this.updatePrinciplePage();
        break;
      
      case 'help.html':
        this.updateHelpPage();
        break;
      
      case 'terms.html':
        this.updateTermsPage();
        break;
      
      case 'contact.html':
        this.updateContactPage();
        break;
      
      case 'settings.html':
        this.updateSettingsPage();
        break;
    }
  },

  // 更新关于我们页面
  updateAboutPage() {
    const h1 = document.querySelector('#content_box h1');
    const paragraphs = document.querySelectorAll('#content_box p');
    
    if (h1) h1.textContent = i18next.t('about_us');
    if (paragraphs.length > 0) paragraphs[0].textContent = i18next.t('about_content');
    if (paragraphs.length > 1) paragraphs[1].textContent = i18next.t('team_intro');
    if (paragraphs.length > 2) paragraphs[2].textContent = i18next.t('mission');
    if (paragraphs.length > 3) paragraphs[3].textContent = i18next.t('feedback');
  },

  // 更新视频播放原理页面
  updatePrinciplePage() {
    const h1 = document.querySelector('#content_box h1');
    const h2s = document.querySelectorAll('#content_box h2');
    const paragraphs = document.querySelectorAll('#content_box p');
    const listItems = document.querySelectorAll('#content_box li');
    
    if (h1) h1.textContent = i18next.t('video_principle');
    if (paragraphs.length > 0) paragraphs[0].textContent = i18next.t('principle_intro');
    
    if (h2s.length > 0) h2s[0].textContent = i18next.t('streaming_protocol');
    if (paragraphs.length > 1) paragraphs[1].textContent = i18next.t('protocol_content');
    if (listItems.length > 0) listItems[0].textContent = i18next.t('hls');
    if (listItems.length > 1) listItems[1].textContent = i18next.t('dash');
    if (listItems.length > 2) listItems[2].textContent = i18next.t('rtmp');
    if (listItems.length > 3) listItems[3].textContent = i18next.t('webrtc');
    
    if (h2s.length > 1) h2s[1].textContent = i18next.t('video_codec');
    if (paragraphs.length > 2) paragraphs[2].textContent = i18next.t('codec_content');
    if (listItems.length > 4) listItems[4].textContent = i18next.t('codec_standards');
    if (listItems.length > 5) listItems[5].textContent = i18next.t('encoding_process');
    if (listItems.length > 6) listItems[6].textContent = i18next.t('decoding_process');
    
    if (h2s.length > 2) h2s[2].textContent = i18next.t('buffering');
    if (paragraphs.length > 3) paragraphs[3].textContent = i18next.t('buffering_content');
    if (listItems.length > 7) listItems[7].textContent = i18next.t('pre_buffering');
    if (listItems.length > 8) listItems[8].textContent = i18next.t('dynamic_buffering');
    if (listItems.length > 9) listItems[9].textContent = i18next.t('adaptive_bitrate');
    
    if (h2s.length > 3) h2s[3].textContent = i18next.t('player_architecture');
    if (paragraphs.length > 4) paragraphs[4].textContent = i18next.t('architecture_content');
    if (listItems.length > 10) listItems[10].textContent = i18next.t('network_layer');
    if (listItems.length > 11) listItems[11].textContent = i18next.t('demux_layer');
    if (listItems.length > 12) listItems[12].textContent = i18next.t('decoding_layer');
    if (listItems.length > 13) listItems[13].textContent = i18next.t('rendering_layer');
    if (listItems.length > 14) listItems[14].textContent = i18next.t('control_layer');
    
    if (h2s.length > 4) h2s[4].textContent = i18next.t('common_issues');
    if (paragraphs.length > 5) paragraphs[5].textContent = i18next.t('issues_content');
    if (listItems.length > 15) listItems[15].textContent = i18next.t('buffering_issue');
    if (listItems.length > 16) listItems[16].textContent = i18next.t('delay_issue');
    if (listItems.length > 17) listItems[17].textContent = i18next.t('quality_issue');
  },

  // 更新帮助中心页面
  updateHelpPage() {
    const h1 = document.querySelector('#content_box h1');
    const h2 = document.querySelector('#content_box h2');
    const h3s = document.querySelectorAll('#content_box h3');
    const paragraphs = document.querySelectorAll('#content_box p');
    const listItems = document.querySelectorAll('#content_box li');
    
    if (h1) h1.textContent = i18next.t('help_center');
    if (paragraphs.length > 0) paragraphs[0].textContent = i18next.t('help_intro');
    if (h2) h2.textContent = i18next.t('common_questions');
    
    if (h3s.length > 0) h3s[0].textContent = i18next.t('supported_formats');
    if (paragraphs.length > 1) paragraphs[1].textContent = i18next.t('formats_answer');
    
    if (h3s.length > 1) h3s[1].textContent = i18next.t('how_to_play');
    if (paragraphs.length > 2) paragraphs[2].textContent = i18next.t('play_answer');
    
    if (h3s.length > 2) h3s[2].textContent = i18next.t('buffering_solution');
    if (paragraphs.length > 3) paragraphs[3].textContent = i18next.t('buffering_solution_answer');
    if (listItems.length > 0) listItems[0].textContent = i18next.t('network_issue');
    if (listItems.length > 1) listItems[1].textContent = i18next.t('source_issue');
    if (listItems.length > 2) listItems[2].textContent = i18next.t('device_issue');
    
    if (h3s.length > 3) h3s[3].textContent = i18next.t('clear_history');
    if (paragraphs.length > 4) paragraphs[4].textContent = i18next.t('clear_history_answer');
    if (listItems.length > 3) listItems[3].textContent = i18next.t('browser_settings');
    if (listItems.length > 4) listItems[4].textContent = i18next.t('incognito_mode');
    
    if (h3s.length > 4) h3s[4].textContent = i18next.t('playback_failure');
    if (paragraphs.length > 5) paragraphs[5].textContent = i18next.t('playback_failure_answer');
    if (listItems.length > 5) listItems[5].textContent = i18next.t('url_error');
    if (listItems.length > 6) listItems[6].textContent = i18next.t('source_unavailable');
    if (listItems.length > 7) listItems[7].textContent = i18next.t('browser_unsupported');
    if (listItems.length > 8) listItems[8].textContent = i18next.t('network_connection');
    
    if (h3s.length > 5) h3s[5].textContent = i18next.t('supported_browsers');
    if (paragraphs.length > 6) paragraphs[6].textContent = i18next.t('browsers_answer');
    if (listItems.length > 9) listItems[9].textContent = i18next.t('chrome');
    if (listItems.length > 10) listItems[10].textContent = i18next.t('firefox');
    if (listItems.length > 11) listItems[11].textContent = i18next.t('safari');
    if (listItems.length > 12) listItems[12].textContent = i18next.t('edge');
    if (paragraphs.length > 7) paragraphs[7].textContent = i18next.t('browser_recommendation');
    
    if (h3s.length > 6) h3s[6].textContent = i18next.t('quality_adjustment');
    if (paragraphs.length > 8) paragraphs[8].textContent = i18next.t('quality_answer');
    
    if (h3s.length > 7) h3s[7].textContent = i18next.t('subtitles_support');
    if (paragraphs.length > 9) paragraphs[9].textContent = i18next.t('subtitles_answer');
  },

  // 更新服务条款页面
  updateTermsPage() {
    const h1 = document.querySelector('#content_box h1');
    const h2s = document.querySelectorAll('#content_box h2');
    const h3s = document.querySelectorAll('#content_box h3');
    const paragraphs = document.querySelectorAll('#content_box p');
    const listItems = document.querySelectorAll('#content_box li');
    
    if (h1) h1.textContent = i18next.t('terms_privacy');
    
    if (h2s.length > 0) h2s[0].textContent = i18next.t('terms_of_service');
    if (paragraphs.length > 0) paragraphs[0].textContent = i18next.t('terms_intro');
    
    if (h3s.length > 0) h3s[0].textContent = i18next.t('service_content');
    if (paragraphs.length > 1) paragraphs[1].textContent = i18next.t('service_description');
    
    if (h3s.length > 1) h3s[1].textContent = i18next.t('user_responsibility');
    if (paragraphs.length > 2) paragraphs[2].textContent = i18next.t('user_rules');
    if (listItems.length > 0) listItems[0].textContent = i18next.t('legal_content');
    if (listItems.length > 1) listItems[1].textContent = i18next.t('no_illegal_content');
    if (listItems.length > 2) listItems[2].textContent = i18next.t('no_illegal_activities');
    
    if (h3s.length > 2) h3s[2].textContent = i18next.t('disclaimer');
    if (paragraphs.length > 3) paragraphs[3].textContent = i18next.t('disclaimer_content');
    if (listItems.length > 3) listItems[3].textContent = i18next.t('content_disclaimer');
    if (listItems.length > 4) listItems[4].textContent = i18next.t('service_interruption');
    if (listItems.length > 5) listItems[5].textContent = i18next.t('user_losses');
    
    if (h3s.length > 3) h3s[3].textContent = i18next.t('service_changes');
    if (paragraphs.length > 4) paragraphs[4].textContent = i18next.t('changes_content');
    
    if (h3s.length > 4) h3s[4].textContent = i18next.t('terms_modification');
    if (paragraphs.length > 5) paragraphs[5].textContent = i18next.t('modification_content');
    
    if (h2s.length > 1) h2s[1].textContent = i18next.t('privacy_policy');
    if (paragraphs.length > 6) paragraphs[6].textContent = i18next.t('privacy_intro');
    
    if (h3s.length > 5) h3s[5].textContent = i18next.t('information_collection');
    if (paragraphs.length > 7) paragraphs[7].textContent = i18next.t('collection_content');
    if (listItems.length > 6) listItems[6].textContent = i18next.t('play_history');
    if (listItems.length > 7) listItems[7].textContent = i18next.t('device_info');
    if (listItems.length > 8) listItems[8].textContent = i18next.t('usage_data');
    
    if (h3s.length > 6) h3s[6].textContent = i18next.t('information_usage');
    if (paragraphs.length > 8) paragraphs[8].textContent = i18next.t('usage_content');
    if (listItems.length > 9) listItems[9].textContent = i18next.t('service_improvement');
    if (listItems.length > 10) listItems[10].textContent = i18next.t('user_experience');
    if (listItems.length > 11) listItems[11].textContent = i18next.t('usage_analysis');
    
    if (h3s.length > 7) h3s[7].textContent = i18next.t('information_sharing');
    if (paragraphs.length > 9) paragraphs[9].textContent = i18next.t('sharing_content');
    if (listItems.length > 12) listItems[12].textContent = i18next.t('legal_requirement');
    if (listItems.length > 13) listItems[13].textContent = i18next.t('protect_rights');
    if (listItems.length > 14) listItems[14].textContent = i18next.t('user_permission');
    
    if (h3s.length > 8) h3s[8].textContent = i18next.t('information_security');
    if (paragraphs.length > 10) paragraphs[10].textContent = i18next.t('security_content');
    
    if (h3s.length > 9) h3s[9].textContent = i18next.t('cookie_policy');
    if (paragraphs.length > 11) paragraphs[11].textContent = i18next.t('cookie_content');
    
    if (h3s.length > 10) h3s[10].textContent = i18next.t('privacy_modification');
    if (paragraphs.length > 12) paragraphs[12].textContent = i18next.t('privacy_modification_content');
  },

  // 更新联系我们页面
  updateContactPage() {
    const h1 = document.querySelector('#content_box h1');
    const h2s = document.querySelectorAll('#content_box h2');
    const paragraphs = document.querySelectorAll('#content_box p');
    const listItems = document.querySelectorAll('#content_box li');
    const labels = document.querySelectorAll('.form_group label');
    const submitButton = document.querySelector('.form_group button[type="submit"]');
    
    if (h1) h1.textContent = i18next.t('contact_us');
    if (paragraphs.length > 0) paragraphs[0].textContent = i18next.t('contact_intro');
    
    if (h2s.length > 0) h2s[0].textContent = i18next.t('contact_methods');
    if (listItems.length > 0) listItems[0].textContent = i18next.t('email');
    if (listItems.length > 1) listItems[1].textContent = i18next.t('wechat');
    if (listItems.length > 2) listItems[2].textContent = i18next.t('qq');
    
    if (h2s.length > 1) h2s[1].textContent = i18next.t('feedback_form');
    if (paragraphs.length > 1) paragraphs[1].textContent = i18next.t('form_intro');
    
    if (labels.length > 0) labels[0].textContent = i18next.t('name');
    if (labels.length > 1) labels[1].textContent = i18next.t('email_label');
    if (labels.length > 2) labels[2].textContent = i18next.t('subject');
    if (labels.length > 3) labels[3].textContent = i18next.t('message');
    
    if (submitButton) submitButton.textContent = i18next.t('submit');
    
    if (h2s.length > 2) h2s[2].textContent = i18next.t('faq_reference');
    if (paragraphs.length > 2) paragraphs[2].textContent = i18next.t('faq_link');
  },

  // 更新设置页面
  updateSettingsPage() {
    const h1 = document.querySelector('#content_box h1');
    const h2s = document.querySelectorAll('#content_box h2');
    const labels = document.querySelectorAll('.setting_group label');
    const options = document.querySelectorAll('#theme_select option');
    const languageOptions = document.querySelectorAll('#language_select option');
    const saveButton = document.getElementById('save_settings');
    
    if (h1) h1.textContent = i18next.t('settings_page');
    if (h2s.length > 0) h2s[0].textContent = i18next.t('theme_settings');
    if (h2s.length > 1) h2s[1].textContent = i18next.t('language_settings');
    
    if (labels.length > 0) labels[0].textContent = i18next.t('select_theme');
    if (labels.length > 1) labels[1].textContent = i18next.t('select_language');
    
    if (options.length > 0) options[0].textContent = i18next.t('light_mode');
    if (options.length > 1) options[1].textContent = i18next.t('dark_mode');
    if (options.length > 2) options[2].textContent = i18next.t('system_mode');
    
    if (languageOptions.length > 0) languageOptions[0].textContent = i18next.t('chinese');
    if (languageOptions.length > 1) languageOptions[1].textContent = i18next.t('english');
    
    if (saveButton) saveButton.textContent = i18next.t('save');
  }
};

// 页面加载时初始化国际化
document.addEventListener('DOMContentLoaded', () => {
  I18nSystem.init();

  // 语言选择按钮事件
  const languageBtn = document.getElementById('language_btn');
  const languageDropdown = document.getElementById('language_dropdown');
  if (languageBtn && languageDropdown) {
    // 切换下拉菜单显示
    languageBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle('show');
      // 关闭主题下拉菜单
      const themeDropdown = document.getElementById('theme_dropdown');
      if (themeDropdown) {
        themeDropdown.classList.remove('show');
      }
    });

    // 语言选择
    const languageOptions = languageDropdown.querySelectorAll('a');
    languageOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang');
        I18nSystem.changeLanguage(lang);
        languageDropdown.classList.remove('show');
        // 更新按钮文本
        languageBtn.textContent = i18next.t('language');
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