document.getElementById('webhookForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serverName = document.getElementById('serverName').value;
    const serverRegion = document.getElementById('serverRegion').value;
    const serverPurpose = document.getElementById('serverPurpose').value;
    const serverRules = document.getElementById('serverRules').value;
    const discordUsername = document.getElementById('discordUsername').value;

    const embed = {
        title: 'New Server Information',
        color: 3447003,
        fields: [
            {
                name: 'Server Name',
                value: serverName,
                inline: true
            },
            {
                name: 'Server Region',
                value: serverRegion,
                inline: true
            },
            {
                name: 'Server Purpose',
                value: serverPurpose
            },
            {
                name: 'Server Rules',
                value: serverRules
            },
            {
                name: 'Discord Username',
                value: discordUsername
            }
        ]
    };

    const payload = {
        embeds: [embed]
    };

    fetch('https://discord.com/api/webhooks/1241671031006167094/oc7VnOyG8E5CO7_umJxsq_sjn-O6a8ofW5KBarAVNsqSxwID3ACJZyP62nd2FVONMcZX', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send webhook: ' + response.statusText);
        }
        document.getElementById('successPopup').classList.add('show-popup');
        setTimeout(() => {
            document.getElementById('successPopup').classList.remove('show-popup');
        }, 3000);
        document.getElementById('webhookForm').reset();
    })
    .catch(error => {
        console.error('Error sending webhook:', error);
        document.getElementById('errorPopup').classList.add('show-popup');
        setTimeout(() => {
            document.getElementById('errorPopup').classList.remove('show-popup');
        }, 3000);
    });
});
