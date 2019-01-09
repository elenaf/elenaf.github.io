$name = $_POST['name'];
$surname = $_POST['surname'];
$fio = $name . ' ' . $surname;
$organization = $_POST['organization'];
$date = $_POST['date'];
$email = 'efedotova@ceki.ru';

if (mail($email, "Заявка на обучение", "ФИО:".$fio." E-mail: ".$email,"From: e-a-fedotova@yandex.ru \r\n")) {
	echo "mail sent";
} else {
	echo "error";
}