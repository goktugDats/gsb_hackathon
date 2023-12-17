import 'dart:async';

import 'package:avalanche_hackathon/home.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Google Maps Örneği',
      home: MapSample(),
    );
  }
}

class MapSample extends StatefulWidget {
  const MapSample({Key? key}) : super(key: key);

  @override
  State<MapSample> createState() => MapSampleState();
}

class MapSampleState extends State<MapSample> {
  final Completer<GoogleMapController> _controller =
      Completer<GoogleMapController>();
  Set<Marker> _markers = Set();

  static const CameraPosition _kTurkey = CameraPosition(
    target: LatLng(39.9334, 32.8597),
    zoom: 6.0,
  );

  static const CameraPosition _kIstanbul = CameraPosition(
    target: LatLng(40.98811373741674, 29.030094549067858),
    zoom: 18.0,
  );

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: GoogleMap(
        mapType: MapType.normal,
        initialCameraPosition: _kTurkey,
        onMapCreated: (GoogleMapController controller) {
          _controller.complete(controller);
        },
        onTap: _onMapTapped,
        markers: _markers,
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _goToIstanbul,
        label: const Text('İstanbul\'a Git!'),
        icon: const Icon(Icons.directions_boat),
      ),
    );
  }

  Future<void> _goToIstanbul() async {
    final GoogleMapController controller = await _controller.future;
    await controller.animateCamera(CameraUpdate.newCameraPosition(_kIstanbul));
  }

  void _onMapTapped(LatLng tappedPoint) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Yetkili ŞeffafDestek Şifrenizi Giriniz'),
          content: TextField(
            obscureText: true,
            decoration: InputDecoration(
              hintText: 'Şifre',
            ),
          ),
          actions: <Widget>[
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: Text('İptal'),
            ),
            ElevatedButton(
              onPressed: () {
                String location = tappedPoint.latitude.toString() +
                    "," +
                    tappedPoint.longitude.toString();
                Navigator.of(context).push(MaterialPageRoute(
                  builder: (context) => HomePage(
                    location: location,
                  ),
                ));
              },
              child: Text('Onayla'),
            ),
          ],
        );
      },
    );
  }
}
