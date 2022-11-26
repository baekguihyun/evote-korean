(function checkCountActiveInRound() {
    $.get('actions/countRoundStatus.php', (result, status) => {
        $("#countActiveInRound").text(result);
        
        createCountdown(checkCountActiveInRound, false);
    }).fail(() => {
        console.log('Error when polling for round status, retrying...');
        // Alert is annoying but should be ok here (not being able to vote is worse)
        alert('투표가 열려 있는지 확인할 수 없습니다. 페이지를 새로고침해 보세요.');
    }); // If we get an error
})();