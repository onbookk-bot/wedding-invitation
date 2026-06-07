function copyAccount(account){

  navigator.clipboard.writeText(account);

  alert(
    "계좌번호가 복사되었습니다."
  );

}