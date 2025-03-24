(function() {
    // Create and append CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        #chat-button-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 70px;
            height: 70px;
            background: transparent;
            border: none;
            cursor: pointer;
            z-index: 100000;
        }
        #chat-container {
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 400px;
            height: 600px;
            z-index: 99999;
            display: none;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }
        #chat-loader {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #3498db;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            z-index: 100001;
        }
        #chat-widget {
            width: 100%;
            height: 100%;
            border: none;
            border-radius: 10px;
            display: none;
        }
    `;
    document.head.appendChild(style);

    // Create button
    const button = document.createElement('button');
    button.id = 'chat-button-container';
    button.innerHTML = '<img src="https://karandevhub.github.io/chatbot/robot.png" alt="Chat Icon" style="width: 100%; height: 100%;">';
    document.body.appendChild(button);


    const container = document.createElement('div');
    container.id = 'chat-container';
    
    const loader = document.createElement('div');
    loader.id = 'chat-loader';
    container.appendChild(loader);

    const iframe = document.createElement('iframe');
    iframe.id = 'chat-widget';
    container.appendChild(iframe);
    
    document.body.appendChild(container);

    button.addEventListener('click', function() {
        if (container.style.display === 'none' || container.style.display === '') {
            container.style.display = 'block';
            loader.style.display = 'block';
            
            if (!iframe.src) {
                iframe.src = 'https://chat-widget.rexx.cloud/index.html';
                iframe.onload = function() {
                    loader.style.display = 'none';
                    iframe.style.display = 'block';
                };
            } else {
                loader.style.display = 'none';
                iframe.style.display = 'block';
            }
        } else {
            container.style.display = 'none';
            iframe.style.display = 'none';
        }
    });
})();
