document.addEventListener('DOMContentLoaded', () => {
    // Function to make windows draggable
    function makeDraggable(el) {
        let isDragging = false;
        let offsetX, offsetY;

        el.querySelector('.title-bar').addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - el.getBoundingClientRect().left;
            offsetY = e.clientY - el.getBoundingClientRect().top;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (isDragging) {
                el.style.left = `${e.clientX - offsetX}px`;
                el.style.top = `${e.clientY - offsetY}px`;
            }
        }

        function onMouseUp() {
            isDragging = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }

    // Function to make windows resizable
    function makeResizable(el) {
        const handle = el.querySelector('.resize-handle');
        let isResizing = false;
        let lastDownX = 0;
        let lastDownY = 0;

        handle.addEventListener('mousedown', (e) => {
            isResizing = true;
            lastDownX = e.clientX;
            lastDownY = e.clientY;
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        });

        function onMouseMove(e) {
            if (isResizing) {
                const dx = e.clientX - lastDownX;
                const dy = e.clientY - lastDownY;
                el.style.width = `${el.offsetWidth + dx}px`;
                el.style.height = `${el.offsetHeight + dy}px`;
                lastDownX = e.clientX;
                lastDownY = e.clientY;
            }
        }

        function onMouseUp() {
            isResizing = false;
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    }

    // Function to toggle fullscreen mode
    function toggleFullscreen(el) {
        if (!document.fullscreenElement) {
            el.requestFullscreen().catch(err => console.log(err));
        } else {
            document.exitFullscreen();
        }
    }

    // Initialize draggable and resizable windows
    document.querySelectorAll('.window').forEach(windowEl => {
        makeDraggable(windowEl);
        makeResizable(windowEl);
    });

    // Open Notepad button
    document.getElementById('openNotepadBtn').addEventListener('click', () => {
        document.getElementById('notepad').style.display = 'block';
    });

    // Open File Explorer button
    document.getElementById('openFileExplorerBtn').addEventListener('click', () => {
        document.getElementById('fileExplorer').style.display = 'block';
    });

    // Open Media Player button
    document.getElementById('openMediaPlayerBtn').addEventListener('click', () => {
        document.getElementById('mediaPlayer').style.display = 'block';
    });

    // Open ChatSearch button
    document.getElementById('openChatSearchBtn').addEventListener('click', () => {
        document.getElementById('chatSearch').style.display = 'block';
    });

    // Close buttons
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.window').style.display = 'none';
        });
    });

    // Fullscreen buttons
    document.querySelectorAll('.fullscreen-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const windowEl = e.target.closest('.window');
            toggleFullscreen(windowEl);
        });
    });

    // Start Menu button
    document.getElementById('startMenuBtn').addEventListener('click', () => {
        const startMenu = document.getElementById('startMenu');
        startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Create Notepad from Start Menu
    document.getElementById('startMenuNotepad').addEventListener('click', () => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = '📝 Notepad';
        icon.onclick = () => document.getElementById('notepad').style.display = 'block';
        document.getElementById('iconsContainer').appendChild(icon);
    });

    // Create File Explorer from Start Menu
    document.getElementById('startMenuFileExplorer').addEventListener('click', () => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = '📁 File Explorer';
        icon.onclick = () => document.getElementById('fileExplorer').style.display = 'block';
        document.getElementById('iconsContainer').appendChild(icon);
    });

    // Create Media Player from Start Menu
    document.getElementById('startMenuMediaPlayer').addEventListener('click', () => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = '🎵 Media Player';
        icon.onclick = () => document.getElementById('mediaPlayer').style.display = 'block';
        document.getElementById('iconsContainer').appendChild(icon);
    });

    // Context Menu
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        const contextMenu = document.getElementById('contextMenu');
        contextMenu.style.display = 'block';
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.top = `${e.pageY}px`;
    });

    document.addEventListener('click', () => {
        document.getElementById('contextMenu').style.display = 'none';
    });

    // Create icons from Context Menu
    document.getElementById('createNotepad').addEventListener('click', () => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = '📝 Notepad';
        icon.onclick = () => document.getElementById('notepad').style.display = 'block';
        document.getElementById('iconsContainer').appendChild(icon);
    });

    document.getElementById('createFileExplorer').addEventListener('click', () => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = '📁 File Explorer';
        icon.onclick = () => document.getElementById('fileExplorer').style.display = 'block';
        document.getElementById('iconsContainer').appendChild(icon);
    });

    document.getElementById('createMediaPlayer').addEventListener('click', () => {
        const icon = document.createElement('div');
        icon.className = 'icon';
        icon.textContent = '🎵 Media Player';
        icon.onclick = () => document.getElementById('mediaPlayer').style.display = 'block';
        document.getElementById('iconsContainer').appendChild(icon);
    });
});
