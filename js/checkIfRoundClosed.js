/**
 * Checks if the current session is closed by calling actions/pollRoundStatus.php
 * 
 * Requires jQuery
 */
(function checkIfRoundClosed() {
    $.get('actions/pollRoundStatus.php', (result, status) => {
        if(result.trim() === "false") {
            // Reload page from server
            window.location.reload();
        } else {
            // We start a countdown
            createCountdown(checkIfRoundClosed, false);
        }
    }).fail(() => {
        console.log('Error when polling for round status, retrying...');
        // Alert is annoying but should be ok here (not being able to vote is worse)
        alert('투표가 열려 있는지 확인할 수 없습니다. 페이지를 새로고침해 보세요.');
    }); // If we get an error
})();