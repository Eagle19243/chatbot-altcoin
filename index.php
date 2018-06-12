<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="referer" content="no-referer">
        <title>Support</title>
        <link rel="icon" type="image/png" 
            href="assets/img/favicon.png">
        <meta property="og:title" content="Support"/>
        <meta property="og:description" content=""/>
        <meta property="og:locale" content="en"/>
        <meta property="og:image" content="" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,300&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Extended" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="assets/css/style.css">
    </head>
    <body>
        <div id="preloader" style="opacity: 0; display: none;">
            <noscript>
                <h1>This application does'not work without javascript</h1>
            </noscript>
            <div class="logo"></div>
        </div>
            
        <div class="b-agent-demo">
            <div class="b-agent-demo_header">
                <div class="b-agent-demo_header-icon">
                    <div class="b-agent-demo_header-icon-align-helper">
                        <img id="agent-avatar" 
                            src="assets/img/logo.png" />
                    </div>
                </div>
                <div class="b-agent-demo_header-wrapper">
                    <div class="b-agent-demo_header-agent-name">Support</div>
                    <div class="b-agent-demo_header-description"></div>
                </div>
            </div>
            <div class="b-agent-demo_result" id="resultWrapper">
                <table class="b-agent-demo_result-table">
                    <tbody><tr><td id="result"></td></tr></tbody>
                </table>
            </div>
            <div class="clearfix"></div>
            <div class="b-agent-demo_input">
                <form id="agentDemoForm">
                    <input type="text" name="q" autocomplete="off" 
                        id="query" placeholder="Ask something...">
                    <i class="b-agent-demo_input-microphone material-icons-extended" 
                        id="mic" style="display: none;">
                        mic
                    </i>
                </form>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script src="assets/js/script.js"></script>
    </body>
</html>