package media;

import javax.xml.ws.Endpoint;

public class MateriasServerPublisher {

  public static void main(String[] args)
  {
    Endpoint.publish("http://127.0.0.1:8080/media",
    new MateriasServerImpl());
  }
}