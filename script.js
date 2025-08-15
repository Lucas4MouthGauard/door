// Absurd websites list
const absurdWebsites = [
    {
        url: "https://www.thewikigame.com/",
        name: "Wiki Game",
        description: "A game that makes you jump frantically between Wikipedia pages"
    },
    {
        url: "https://pointerpointer.com/",
        name: "Pointer Pointer",
        description: "No matter where you put your mouse, there will be a photo of a finger pointing to that position"
    },
    {
        url: "https://www.sanger.dk/",
        name: "Sanger",
        description: "A website full of randomness and absurdity"
    },
    {
        url: "https://www.koalastothemax.com/",
        name: "Koalas to the Max",
        description: "Click the circles to discover the hidden koalas inside"
    },
    {
        url: "https://www.omfgdogs.com/",
        name: "OMG Dogs",
        description: "A crazy website full of dog animations"
    },
    {
        url: "https://zzz.zoomquilt.org/",
        name: "Zoomquilt",
        description: "Infinite zoom surrealist art"
    },
    {
        url: "https://www.thispersondoesnotexist.com/",
        name: "This Person Does Not Exist",
        description: "AI-generated fake human face photos"
    },
    {
        url: "https://app.radiooooo.com/",
        name: "Radiooooo",
        description: "A music radio that travels through time and space"
    },
    {
        url: "https://weirdorconfusing.com/",
        name: "Weird or Confusing",
        description: "A website full of strange content"
    },
    {
        url: "https://www.rainymood.com/",
        name: "Rainy Mood",
        description: "A website that lets you feel the atmosphere of a rainy day"
    },
    {
        url: "https://www.spacejam.com/",
        name: "Space Jam",
        description: "The classic Space Jam website"
    },
    {
        url: "https://www.nyan.cat/",
        name: "Nyan Cat",
        description: "The classic rainbow cat animation website"
    }
];

// Absurd descriptions list
const absurdDescriptions = [
    "A parallel universe full of infinite possibilities",
    "Time loses its meaning here",
    "The boundary between reality and illusion becomes blurred",
    "A world ruled only by cats",
    "All doors lead to the same room",
    "Gravity is an optional feature here",
    "A dream built with pixels",
    "Reality is redefined here",
    "A chaotic world full of randomness",
    "All logic is overturned",
    "A dimension where only music exists",
    "Reality is infinitely magnified here"
];

// Meme phrases for random effects
const memePhrases = [
    "🚪 TO THE MOON! 🚀",
    "DOOR GANG! 🚪",
    "WEN LAMBO? 🚗",
    "HODL THE DOOR! 💎",
    "DIAMOND DOORS! 💎🚪",
    "PAPER HANDS OUT! 🚪",
    "DOOR COIN TO 100X! 📈",
    "NOT FINANCIAL ADVICE! ⚠️",
    "DYOR! (Do Your Own Research) 🔍",
    "WAGMI! (We're All Gonna Make It) 💪",
    "NGMI! (Not Gonna Make It) 😅",
    "APE IN! 🦍",
    "FOMO! 😱",
    "PUMP IT! 📈",
    "DUMP IT! 📉",
    "WHALE ALERT! 🐋",
    "SHILL ALERT! 📢",
    "MOONSHOT! 🌙",
    "RUG PULL! 😭",
    "GEM ALERT! 💎"
];

// Random emoji combinations
const randomEmojis = ["🚪", "🚀", "💎", "🦍", "🐋", "📈", "📉", "🌙", "🔥", "💯", "🎯", "🏆", "⭐", "🌟", "✨", "💫", "🎉", "🎊", "🎈", "🎁"];

// Global variables
let currentDiscovery = "";
let memeMode = false;
let clickCount = 0;
let lastClickTime = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeStats();
    setupEventListeners();
    createPixelParticles();
    loadStats();
    setupMemeInteractions();
    const cleanupVisibility = setupPageVisibilityListener();
    
    // Clean up resources when page unloads
    window.addEventListener('beforeunload', function() {
        if (cleanupVisibility) {
            cleanupVisibility();
        }
    });
    
    // Performance optimization: reduce repaints
    if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
            // 在空闲时间执行非关键操作
            console.log('页面性能优化完成');
        });
    }
});

// Setup meme interactions
function setupMemeInteractions() {
    // Random meme effects on page load
    setTimeout(() => {
        showRandomMemeEffect();
    }, 2000);
    
    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            activateMemeMode();
        }
    });
    
    // Random background color changes
    setInterval(() => {
        if (Math.random() < 0.01) { // 1% chance every interval
            createRandomColorFlash();
        }
    }, 5000);
    
    // Mouse trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.1) { // 10% chance to create trail
            createMouseTrail(e.clientX, e.clientY);
        }
    });
}

// Show random meme effect
function showRandomMemeEffect() {
    const phrases = [
        "🚪 DOOR COIN LAUNCHING! 🚀",
        "💎 DIAMOND DOORS ONLY! 💎",
        "🦍 APE INTO DOOR! 🦍",
        "🌙 TO THE MOON! 🌙"
    ];
    
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    showFloatingText(randomPhrase, Math.random() * window.innerWidth, Math.random() * window.innerHeight);
}

// Create floating text effect
function showFloatingText(text, x, y) {
    const floatingText = document.createElement('div');
    floatingText.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        color: #ffd700;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        pointer-events: none;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
        animation: floatUp 3s ease-out forwards;
    `;
    floatingText.textContent = text;
    
    document.body.appendChild(floatingText);
    
    setTimeout(() => {
        if (floatingText.parentNode) {
            floatingText.parentNode.removeChild(floatingText);
        }
    }, 3000);
}

// Create mouse trail effect
function createMouseTrail(x, y) {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        background: ${randomEmojis[Math.floor(Math.random() * randomEmojis.length)]};
        font-size: 10px;
        z-index: 9999;
        pointer-events: none;
        animation: trailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
}

// Create random color flash
function createRandomColorFlash() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${randomColor};
        opacity: 0.3;
        z-index: 9998;
        pointer-events: none;
        animation: colorFlash 0.5s ease-out;
    `;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        if (flash.parentNode) {
            flash.parentNode.removeChild(flash);
        }
    }, 500);
}

// Activate meme mode
function activateMemeMode() {
    memeMode = true;
    showFloatingText("🚪 MEME MODE ACTIVATED! 🚀", window.innerWidth / 2, window.innerHeight / 2);
    
    // Change all text to meme phrases
    const allTexts = document.querySelectorAll('h1, h2, h3, p, span, div');
    allTexts.forEach(element => {
        if (element.textContent && !element.classList.contains('door-number')) {
            const originalText = element.textContent;
            element.textContent = memePhrases[Math.floor(Math.random() * memePhrases.length)];
            
            setTimeout(() => {
                element.textContent = originalText;
            }, 3000);
        }
    });
    
    // Create rainbow effect
    document.body.style.animation = 'rainbowMode 2s infinite';
    
    setTimeout(() => {
        memeMode = false;
        document.body.style.animation = '';
    }, 5000);
}

// 设置页面可见性监听器 - 优化版本
function setupPageVisibilityListener() {
    // Simplified version without share functionality
    return function cleanup() {
        // Cleanup function for compatibility
    };
}

// Initialize stats - simplified version
function initializeStats() {
    // Check if this is the first visit
    if (!localStorage.getItem('hasVisited')) {
        localStorage.setItem('hasVisited', 'true');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Door click events - enhanced version
    const doors = document.querySelectorAll('.door');
    console.log('Found door elements count:', doors.length);
    
    doors.forEach((door, index) => {
        console.log(`Setting click event for door ${index + 1}`);
        
        // Use simpler event binding
        door.onclick = function(e) {
            console.log(`Door ${index + 1} was clicked`);
            e.preventDefault();
            e.stopPropagation();
            
            // Track click speed for meme effects
            const currentTime = Date.now();
            clickCount++;
            
            if (currentTime - lastClickTime < 1000) {
                // Rapid clicking triggers special effects
                if (clickCount > 5) {
                    showFloatingText("🚪 SPAM CLICKER! 🚪", e.clientX, e.clientY);
                    createSpamEffect();
                }
            } else {
                clickCount = 1;
            }
            
            lastClickTime = currentTime;
            
            openDoor(this);
        };
    });
    
    // Add random meme text on title hover
    const title = document.querySelector('.pixel-title');
    if (title) {
        title.addEventListener('mouseenter', () => {
            const memeText = memePhrases[Math.floor(Math.random() * memePhrases.length)];
            showFloatingText(memeText, Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        });
    }
}

// Create spam effect
function createSpamEffect() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const emoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
            showFloatingText(emoji, x, y);
        }, i * 100);
    }
}

// Open door function - enhanced version
function openDoor(doorElement) {
    console.log('Starting door opening animation');
    
    // Prevent duplicate clicks
    if (doorElement.classList.contains('opening')) {
        console.log('Door is opening, ignoring duplicate click');
        return;
    }
    
    // Store the door element for later use
    window.pendingDoor = doorElement;
    
    // Step 1: Show share requirement message
    showShareRequirement();
}

// Step 1: Show share requirement message
function showShareRequirement() {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.className = 'share-modal';
    modal.innerHTML = `
        <div class="share-modal-content">
            <div class="share-modal-header">
                <h3>🚪 Please Share Tweet First</h3>
                <p>Share to unlock the mysterious door</p>
            </div>
            <div class="share-modal-body">
                <button class="share-modal-button" onclick="proceedToShare()">
                    📱 Share to Twitter
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add floating text
    showFloatingText("🚪 Please share tweet first! 🚀", window.innerWidth / 2, window.innerHeight / 2);
}

// Step 2: Proceed to share
function proceedToShare() {
    // Remove modal
    const modal = document.querySelector('.share-modal');
    if (modal) {
        modal.remove();
    }
    
    // Share to Twitter
    const shareText = "The first $QubitGate @DoorMeme on Solana\n\nThink before you open\n\nYou'll arrive where you imagined 🚪✨";
    const shareTextEncoded = encodeURIComponent(shareText);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareTextEncoded}`;
    
    // Open Twitter share page in new tab
    window.open(twitterUrl, '_blank');
    
    // Step 3: Show confirmation and open door
    setTimeout(() => {
        showOpenDoorConfirmation();
    }, 500);
}

// Step 3: Show open door confirmation
function showOpenDoorConfirmation() {
    // Create confirmation modal
    const confirmation = document.createElement('div');
    confirmation.className = 'confirmation-modal';
    confirmation.innerHTML = `
        <div class="confirmation-content">
            <h2>🚪 Open The Door! 🚀</h2>
        </div>
    `;
    
    document.body.appendChild(confirmation);
    
    // Add celebration effects
    createShareCelebration();
    
    // Auto-remove after 1 second
    setTimeout(() => {
        if (confirmation.parentNode) {
            confirmation.parentNode.removeChild(confirmation);
        }
        
        // Step 4: Actually open the door
        if (window.pendingDoor) {
            actuallyOpenDoor(window.pendingDoor);
            window.pendingDoor = null;
        }
    }, 1000);
}

// Show share button in center of screen (kept for compatibility)
function showShareButtonInCenter() {
    const shareSection = document.getElementById('share-section');
    if (shareSection) {
        // Position in center of screen
        shareSection.style.position = 'fixed';
        shareSection.style.top = '50%';
        shareSection.style.left = '50%';
        shareSection.style.transform = 'translate(-50%, -50%)';
        shareSection.style.zIndex = '10000';
        shareSection.style.display = 'block';
        
        // Add show animation
        setTimeout(() => {
            shareSection.classList.add('show');
        }, 100);
        
        // Add floating effect
        showFloatingText("🚪 Click to open the door! 🚀", window.innerWidth / 2, window.innerHeight / 2);
        
        // Add celebration particles
        createShareParticles();
    }
}

// Function to actually open the door after sharing
function actuallyOpenDoor(doorElement) {
    console.log('Actually opening door after share');
    
    doorElement.classList.add('opening');
    console.log('Added opening class');
    
    // Random meme effect on door open
    if (Math.random() < 0.3) { // 30% chance
        const memePhrase = memePhrases[Math.floor(Math.random() * memePhrases.length)];
        showFloatingText(memePhrase, Math.random() * window.innerWidth, Math.random() * window.innerHeight);
    }
    
    // Simple door opening animation
    doorElement.style.transform = 'scale(1.2) rotateY(90deg)';
    doorElement.style.filter = 'brightness(1.5)';
    console.log('Set door animation style');
    
    // Play door sound
    playDoorSound();
    
    // Randomly select website
    const randomSite = absurdWebsites[Math.floor(Math.random() * absurdWebsites.length)];
    const randomDescription = absurdDescriptions[Math.floor(Math.random() * absurdDescriptions.length)];
    
    currentDiscovery = randomDescription;
    console.log('Selected website:', randomSite.name);
    console.log('Selected description:', randomDescription);
    
    // Show door opening effect
    showDoorEffect(doorElement, randomSite.name);
    
    // Delayed redirect
    setTimeout(() => {
        console.log('Preparing to redirect to:', randomSite.url);
        // Open website in new tab
        window.open(randomSite.url, '_blank');
        
        // Trigger door opened event
        document.dispatchEvent(new CustomEvent('doorOpened'));
        
        // Reset door state
        setTimeout(() => {
            doorElement.style.transform = '';
            doorElement.style.filter = '';
            doorElement.classList.remove('opening');
            console.log('Door state reset complete');
        }, 1000);
    }, 1500);
}

// Show share button
function showShareButton() {
    const shareSection = document.getElementById('share-section');
    if (shareSection) {
        shareSection.style.display = 'block';
        
        // Add show animation
        setTimeout(() => {
            shareSection.classList.add('show');
        }, 100);
        
        // Add floating effect
        showFloatingText("🚪 Share to unlock the door! 🚀", window.innerWidth / 2, window.innerHeight / 2);
        
        // Add celebration particles
        createShareParticles();
    }
}

// Create share particles effect
function createShareParticles() {
    const shareSection = document.getElementById('share-section');
    if (!shareSection) return;
    
    const rect = shareSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const x = centerX + (Math.random() - 0.5) * 300;
            const y = centerY + (Math.random() - 0.5) * 300;
            const emoji = ['🎉', '🚀', '💎', '🦍', '✨', '🌟'][Math.floor(Math.random() * 6)];
            showFloatingText(emoji, x, y);
        }, i * 150);
    }
}

// Share to Twitter function
function shareToTwitter() {
    const shareText = "The first $QubitGate @DoorMeme on Solana\n\nThink before you open\n\nYou'll arrive where you imagined 🚪✨";
    const shareTextEncoded = encodeURIComponent(shareText);
    
    // Remove URL from share to avoid local file path
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareTextEncoded}`;
    
    // Open Twitter share page in new tab
    window.open(twitterUrl, '_blank');
    
    // Add celebration effect
    createShareCelebration();
    
    // Open the door immediately after clicking
    if (window.pendingDoor) {
        actuallyOpenDoor(window.pendingDoor);
        window.pendingDoor = null; // Clear the pending door
    }
    
    // Hide the share button
    setTimeout(() => {
        const shareSection = document.getElementById('share-section');
        if (shareSection) {
            shareSection.style.display = 'none';
            shareSection.style.position = 'static';
            shareSection.style.top = 'auto';
            shareSection.style.left = 'auto';
            shareSection.style.transform = 'none';
        }
    }, 500);
}

// Create share celebration effect
function createShareCelebration() {
    // Create multiple floating texts
    const celebrations = [
        "🚪 Door unlocking! 🚪",
        "🚀 To the moon! 🚀",
        "💎 Diamond hands! 💎",
        "🦍 Ape together strong! 🦍",
        "✨ Magic happens! ✨"
    ];
    
    celebrations.forEach((text, index) => {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            showFloatingText(text, x, y);
        }, index * 200);
    });
    
    // Add screen flash effect
    createScreenFlash();
    
    // Hide share button after sharing
    setTimeout(() => {
        const shareSection = document.getElementById('share-section');
        if (shareSection) {
            shareSection.style.display = 'none';
        }
    }, 3000);
}

// Show door opening effect
function showDoorEffect(doorElement, siteName) {
    // Create particle effects
    createDoorParticles(doorElement);
    
    // Show discovery toast with meme twist
    showDiscoveryToast(siteName);
    
    // Add screen flash effect
    createScreenFlash();
    
    // Add light effect behind door
    createDoorLightEffect(doorElement);
    
    // Random chance for extra meme effects
    if (Math.random() < 0.2) {
        createMemeExplosion(doorElement);
    }
}

// Create meme explosion effect
function createMemeExplosion(doorElement) {
    const rect = doorElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const x = centerX + (Math.random() - 0.5) * 200;
            const y = centerY + (Math.random() - 0.5) * 200;
            const emoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
            showFloatingText(emoji, x, y);
        }, i * 50);
    }
}

// Create door particle effects - optimized version
function createDoorParticles(doorElement) {
    const rect = doorElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Reduce particle count for better performance
    const particleCount = 8;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'pixel-particle';
        particle.style.cssText = `
            position: absolute;
            left: ${centerX}px;
            top: ${centerY}px;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            animation: particleFloat 2s ease-out forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;
        
        document.body.appendChild(particle);
        particles.push(particle);
    }
    
    // Unified particle cleanup
    setTimeout(() => {
        particles.forEach(particle => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        });
    }, 2500);
}

// Show discovery toast - enhanced with meme elements
function showDiscoveryToast(siteName) {
    const toast = document.createElement('div');
    const memePhrase = memePhrases[Math.floor(Math.random() * memePhrases.length)];
    
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ffd700, #ff8c00, #ffd700);
        color: #000;
        padding: 25px 35px;
        border-radius: 15px;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        font-weight: bold;
        z-index: 10000;
        animation: discoveryReveal 1s ease-out;
        box-shadow: 
            0 0 30px rgba(255, 215, 0, 0.8),
            0 0 60px rgba(255, 215, 0, 0.4);
        border: 3px solid #b8860b;
        text-align: center;
        text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);
    `;
    toast.innerHTML = `
        <div style="margin-bottom: 10px;">🎬 Discovered a New World!</div>
        <div style="font-size: 0.8rem;">${siteName}</div>
        <div style="font-size: 0.7rem; margin-top: 10px; color: #666;">${memePhrase}</div>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'discoveryHide 0.5s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 500);
    }, 3000);
}

// Play door sound
function playDoorSound() {
    // Audio playback logic can be added here
    // Due to browser restrictions, user interaction is required to play audio
    console.log('Door opened!');
}

// 创建屏幕闪光效果
function createScreenFlash() {
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
        z-index: 9999;
        pointer-events: none;
        animation: screenFlash 1s ease-out;
    `;
    
    document.body.appendChild(flash);
    
    setTimeout(() => {
        if (flash.parentNode) {
            flash.parentNode.removeChild(flash);
        }
    }, 1000);
}

// Create light effect behind door
function createDoorLightEffect(doorElement) {
    const rect = doorElement.getBoundingClientRect();
    const light = document.createElement('div');
    light.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, transparent 70%);
        z-index: 9998;
        pointer-events: none;
        animation: doorLight 2s ease-out;
    `;
    
    document.body.appendChild(light);
    
    setTimeout(() => {
        if (light.parentNode) {
            light.parentNode.removeChild(light);
        }
    }, 2000);
}

// Load stats - simplified version
function loadStats() {
    // Keep function for compatibility but don't perform any operations
}

// Create pixel particle effects - optimized version
function createPixelParticles() {
    // Reduce background particle count
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'pixel-particle';
        particle.style.cssText = `
            position: absolute;
            left: ${Math.random() * window.innerWidth}px;
            top: ${Math.random() * window.innerHeight}px;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            animation: backgroundFloat 4s ease-in-out infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        
        document.body.appendChild(particle);
    }
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes slideInTop {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutTop {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
    }
    
    @keyframes slideInBottom {
        from {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutBottom {
        from {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
        to {
            transform: translateX(-50%) translateY(100%);
            opacity: 0;
        }
    }
    
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.2);
        }
    }
    
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
    }
    
    @keyframes colorFlash {
        0% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.6;
        }
        100% {
            opacity: 0;
        }
    }
    
    @keyframes rainbowMode {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Contract address copy functionality
function setupContractAddressCopy() {
    const contractAddress = document.querySelector('.contract-address');
    if (contractAddress) {
        contractAddress.addEventListener('click', function() {
            const address = 'AbJnqSxnGjpBLR94SszcpP4SZyy4GwbGCXh7RGStpump';
            navigator.clipboard.writeText(address).then(() => {
                // Show success message
                showFloatingText("📋 CA Copied! 📋", this.offsetLeft + this.offsetWidth / 2, this.offsetTop - 20);
                
                // Add visual feedback
                this.style.background = 'rgba(255, 215, 0, 0.3)';
                this.style.transform = 'scale(1.05)';
                
                setTimeout(() => {
                    this.style.background = '';
                    this.style.transform = '';
                }, 500);
            }).catch(err => {
                console.error('Failed to copy: ', err);
                showFloatingText("❌ Copy failed! ❌", this.offsetLeft + this.offsetWidth / 2, this.offsetTop - 20);
            });
        });
        
        // Add tooltip
        contractAddress.title = "Click to copy contract address";
    }
}

// Initialize contract address copy functionality
document.addEventListener('DOMContentLoaded', function() {
    setupContractAddressCopy();
}); 