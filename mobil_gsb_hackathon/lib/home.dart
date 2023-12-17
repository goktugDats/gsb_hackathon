import 'dart:convert';
import 'dart:math';
import 'package:avalanche_hackathon/map_sample.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  final String location;
  const HomePage({super.key, required this.location});

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final TextEditingController titleController = TextEditingController();
  final TextEditingController describeController = TextEditingController();
  final TextEditingController personInvolvedController =
      TextEditingController();
  final TextEditingController balanceController = TextEditingController();
  final TextEditingController amountController = TextEditingController();
  final GlobalKey<ScaffoldMessengerState> _scaffoldMessengerKey =
      GlobalKey<ScaffoldMessengerState>();

  void showSuccessSnackbar(BuildContext context, String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        duration: Duration(seconds: 2),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldMessengerKey,
      appBar: AppBar(
        title: Text('Home Page'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            TextFormField(
              controller: titleController,
              decoration: InputDecoration(labelText: 'Başlık'),
            ),
            TextFormField(
              controller: describeController,
              decoration: InputDecoration(labelText: 'Açıklama'),
            ),
            TextFormField(
              controller: personInvolvedController,
              decoration: InputDecoration(labelText: 'İlgili Kişi Sayısı'),
              keyboardType: TextInputType.number,
            ),
            TextFormField(
              controller: balanceController,
              decoration: InputDecoration(labelText: 'Bakiye'),
              keyboardType: TextInputType.numberWithOptions(decimal: true),
            ),
            TextFormField(
              controller: amountController,
              decoration: InputDecoration(labelText: 'Miktar'),
              keyboardType: TextInputType.numberWithOptions(decimal: true),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: () {
                // Butona basıldığında API isteği yap
                sendApiRequest();
              },
              child: Text('API\'ye Gönder'),
            ),
          ],
        ),
      ),
    );
  }

  Future<void> sendApiRequest() async {
    final url =
        'http://localhost:3000/wisher/create'; // API endpoint'inizi buraya ekleyin
    final Map<String, dynamic> data = {
      "title": titleController.text,
      "describe": describeController.text,
      "personInvolved": int.parse(personInvolvedController.text),
      "emergency_level": 2,
      "problem_type": 2.toString(),
      "balance": double.parse(balanceController.text),
      "amount": double.parse(amountController.text),
      "text": "text",
      "is_over": false,
      "location": widget.location,
    };

    final response = await http.post(
      Uri.parse(url),
      headers: <String, String>{
        'Content-Type': 'application/json',
      },
      body: jsonEncode(data),
    );

    if (300 >= response.statusCode && response.statusCode >= 200) {
      // Başarılı bir şekilde gönderildi.
      print('API İsteği Başarılı: ${response.body}');
      showSuccessSnackbar(context, 'Acil nokta başarıyla yaratıldı.');
      Navigator.of(context)
          .push(MaterialPageRoute(builder: (context) => MapSample()));
    } else {
      // Başarısız durumda hata mesajını yazdır.
      print('API İsteği Başarısız: ${response.statusCode}');
    }
  }
}
