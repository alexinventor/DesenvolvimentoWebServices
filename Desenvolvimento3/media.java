package media;

import java.util.Date;
import javax.jws.WebService;

@WebService(endpointInterface = "media.MateriasServer")
public class MateriasServerImpl implements MateriasServer {

  public float matematica(float nota1, float nota2, float media) {
    return media = (nota1 + nota2)/2;
  }

  public float portugues(float nota1, float nota2, media) {
    return media = (nota1 + nota2)/2;
  }

  public float fisica(float nota1, float nota2, media) {
    return media = (nota1 + nota2)/2;
  }

  public float quimica(float nota1, float nota2) {
    return media = (nota1 + nota2)/2;
  }

}