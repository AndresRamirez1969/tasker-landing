import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso de Privacidad | Tasker Solutions",
  description: "Aviso de Privacidad de IST INTEGRACIÓN DE SOLUCIONES DIGITALES S.A. de C.V.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Aviso de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Fecha de última actualización: Enero 2025
            </p>

            <section>
              <p>
                Con la finalidad de dar cumplimiento a lo establecido por la Ley Federal de Protección de Datos 
                Personales en Posesión de los Particulares y las convenciones internacionales de las que México es 
                parte (la &quot;Ley&quot;), su Reglamento y Lineamientos aplicables, IST INTEGRACIÓN DE SOLUCIONES 
                DIGITALES S.A. de C.V. (la &quot;Empresa&quot;), con domicilio en Calle Roble 315 Col. Santa Engracia 
                en el municipio de San Pedro Garza García C.P. 66267 (el &quot;Domicilio&quot;), Página de Internet{" "}
                <Link href="https://tskr.mx" className="text-blue-600 hover:underline">https://tskr.mx</Link> y 
                correo electrónico para fines de contacto{" "}
                <a href="mailto:customerservice@tskr.mx" className="text-blue-600 hover:underline">
                  customerservice@tskr.mx
                </a>{" "}
                pone a su disposición el presente AVISO DE PRIVACIDAD, con la finalidad de dar un tratamiento legítimo, 
                controlado e informado a sus datos personales, así como garantizar su privacidad y su derecho a la 
                autodeterminación informativa al proporcionarnos dichos datos, observando en todo momento los principios 
                de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad 
                previstos en la Ley.
              </p>
            </section>

            <section>
              <p className="mt-6">
                En lo sucesivo nos referiremos a los participantes de la siguiente manera:
              </p>
              <ol className="list-decimal pl-6 space-y-3 mt-4">
                <li>
                  <strong>Cliente:</strong> Toda aquella persona física y/o moral que requiera el derecho de uso no 
                  exclusivo a la Empresa de un programa de computación que tiene tarea o función específica de 
                  estandarizar procesos de auditoría en tiempo real.
                </li>
                <li>
                  <strong>Proveedor:</strong> Toda aquella persona física que suministre surta y/o proporcione un 
                  servicio y/o producto a la Empresa para que esta cumpla con su objeto de servicio.
                </li>
              </ol>
            </section>

            <section>
              <p className="mt-6">
                La Empresa cuenta con un Portafolio de Clientes de los cuales tiene relación comercial para comprar, 
                desarrollar, otorgar y/o distribuir licencias de uso no exclusivo de un programa computacional conforme 
                al objeto social de la Empresa, sistemas de información, comunicación y demás actos jurídicos, tácitos 
                o expresos que se celebren con los Clientes (el &quot;Portafolio de Clientes&quot;).
              </p>
              <p className="mt-4">
                La Empresa cuenta también con un Portafolio de Proveedores con los cuales generan ciertos derechos y 
                obligaciones para vender, surtir, proveer, otorgar y garantizar productos y servicios necesarios para 
                que la Empresa cumpla con el objeto de las órdenes de compra, contratos de compraventa de mercaderías 
                y demás actos jurídicos, tácitos o expresos que se celebren con terceros. (el &quot;Portafolio de 
                Proveedores&quot;).
              </p>
              <p className="mt-4">
                La Empresa no solicita datos personales sensibles como aquellos datos personales que afecten a la esfera 
                más íntima de su titular, o cuya utilización indebida pueda dar origen a discriminación o conlleve un 
                riesgo grave para éste. En particular, se consideran sensibles aquellos que puedan revelar aspectos como 
                origen racial o étnico, estado de salud presente y futuro, información genética, creencias religiosas, 
                filosóficas y morales, afiliación sindical, opiniones políticas, preferencia sexual.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                1) DATOS PERSONALES SOLICITADOS Y MECANISMOS PARA SU RECOLECCIÓN
              </h2>
              <p>
                La Empresa, por medio de su Portafolio de Clientes y Portafolio de Proveedores, solicita y obtiene 
                datos personales generales y específicos (en lo sucesivo los &quot;Datos Personales&quot;) de las 
                siguientes personas:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                A) TRABAJADORES
              </h3>
              <p>
                Los Datos Personales que serán recabados de trabajadores son necesarios para documentar la relación 
                laboral que existe con cada uno de ellos. Los Datos Personales que usted proporcionará voluntaria y 
                libremente a la Empresa, constan de información personal que es incluida o podrá ser incluida en 
                contratos, cartas, formatos, listados, bases de datos u otros medios físicos y/o electrónicos, según 
                corresponda, a efecto de que la Empresa pueda llevar un registro adecuado de la relación laboral con 
                sus trabajadores y cumplir con las políticas internas, procedimientos y demás obligaciones legales 
                aplicables a la Empresa.
              </p>
              <p className="mt-4">
                Los Datos Personales Generales que le serán solicitados son los siguientes: nombre completo (apellido 
                paterno, apellido materno y nombre(s), domicilio particular completo, fecha y lugar de nacimiento, estado 
                civil, profesión u ocupación actual, teléfono o teléfonos relativos a su ubicación, en caso de existir, 
                Clave Única de Registro de Población (CURP), Registro Federal de Contribuyentes (RFC), información de 
                preparación académica y técnica, información de capacitación, información sobre ingresos, información 
                de trayectoria laboral, género, número de seguridad social, fotografías, datos de familiares directos 
                y de referencias personales.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                B) PROVEEDORES
              </h3>
              <p>
                Los Datos Personales que serán recabados de proveedores de la Empresa, son necesarios para documentar 
                la relación jurídica que existe con cada uno de ellos. Los Datos Personales que usted proporcionará 
                voluntaria y libremente a la Empresa, constan de información personal que es incluida o podrá ser incluida 
                en contratos, según corresponda, a efecto de que la Empresa pueda llevar un registro adecuado de su 
                relación con sus proveedores y cumplir con las políticas internas, procedimientos y demás obligaciones 
                legales aplicables a la Empresa.
              </p>
              <p className="mt-4">
                Los Datos Personales que le serán solicitados son los siguientes: nombre completo, nacionalidad, edad, 
                lugar y fecha de nacimiento, domicilio, número de teléfono particular y/o móvil, correo electrónico, 
                estado civil, profesión, Clave de Registro Federal de Contribuyentes (RFC) y Clave Única de Registro 
                de Población (CURP).
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                C) CLIENTES
              </h3>
              <p>
                Los Datos Personales que serán recabados de Clientes de la Empresa, son necesarios para documentar la 
                relación jurídica que existe con cada uno de ellos. Los Datos Personales que usted proporcionará 
                voluntaria y libremente a la Empresa, constan de información personal que es incluida o podrá ser incluida 
                en contratos, según corresponda, a efecto de que la Empresa pueda llevar un registro adecuado de su 
                relación con sus proveedores y cumplir con las políticas internas, procedimientos y demás obligaciones 
                legales aplicables a la Empresa.
              </p>
              <p className="mt-4">
                Los Datos Personales que le serán solicitados son los siguientes: nombre completo, identificación oficial, 
                nacionalidad, edad, fecha de nacimiento, domicilio, número de teléfono particular y/o móvil, correo 
                electrónico, profesión, Clave de Registro Federal de Contribuyentes (RFC), Clave Única de Registro de 
                Población (CURP) y datos bancarios.
              </p>
              <p className="mt-4">
                En todos los casos, la recolección de Datos Personales por parte de la Empresa es realizada de buena fe 
                y para los fines aquí expuestos; por tal motivo, se presume que los datos proporcionados por sus titulares 
                son apegados a la verdad y completos, por lo que son responsabilidad del titular que los proporciona.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                2) FINALIDADES DEL TRATAMIENTO DE LOS DATOS PERSONALES
              </h2>
              <p>
                Los Datos Personales proporcionados a la Empresa serán utilizados según se explica a continuación:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                B) TRABAJADORES
              </h3>
              <p>
                Finalidades que son necesarias para la existencia, mantenimiento y cumplimiento de su relación laboral 
                con la Empresa: (i) cumplir con los requisitos legales aplicables a la relación laboral de conformidad 
                con la Ley Federal del Trabajo, la Ley del Seguro Social, y demás normatividad aplicable; (ii) llevar un 
                registro adecuado del personal; y (iii) coordinar los servicios prestados por y para la Empresa en 
                beneficio de sus empleados.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                C) PROVEEDORES
              </h3>
              <p>
                Finalidades que son necesarias para la existencia, mantenimiento y cumplimiento de su relación jurídica 
                de proveeduría con la Empresa: (i) gestionar la información de nuestros comisionistas y proveedores para 
                mantener nuestras bases de datos actualizadas; (ii) integrar los expedientes, generar su perfil en línea; 
                gestionar la administración y seguridad de sus datos personales; (iii) gestionar la relación comercial con 
                nuestros comisionistas y proveedores incluyendo el proceso de selección y contratación, así como la gestión 
                de usuarios; (iv) gestión del pago de facturas y/o recibos de honorarios; retener los impuestos 
                correspondientes; acreditar tu identidad y verificar la información que nos proporcionas; (v) mantener 
                resguardos físicos, electrónicos y de procedimiento de tus datos personales en términos de la legislación 
                y regulación aplicable, y (vi) cumplir con los requerimientos legales en materia civil, mercantil, 
                administrativa y fiscal.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                D) CLIENTES
              </h3>
              <p>
                Finalidades que son necesarias para la existencia, mantenimiento y cumplimiento de su relación jurídica 
                con la Empresa: (i) gestionar la información de nuestros Clientes para mantener nuestras bases de datos 
                actualizadas; (ii) integrar los expedientes, gestionar la administración y seguridad de sus datos 
                personales; (iii) gestionar la relación comercial con nuestros Clientes; (iv) gestión del pago de facturas 
                y/o recibos de honorarios; retener los impuestos correspondientes; acreditar tu identidad y verificar la 
                información que nos proporcionas; (v) mantener resguardos físicos, electrónicos y de procedimiento de 
                tus datos personales en términos de la legislación y regulación aplicable, y (vi) cumplir con los 
                requerimientos legales en materia civil, mercantil, administrativa y fiscal.
              </p>
              <p className="mt-4">
                En todos los casos, una vez cumplidas las finalidades del tratamiento de sus Datos Personales, y cuando 
                no exista disposición legal que establezca lo contrario, la Empresa procederá a la cancelación, eliminación 
                y/o destrucción de los Datos Personales recibidos, en los términos establecidos por la Ley.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                3) TRANSFERENCIAS DE LOS DATOS PERSONALES
              </h2>
              <p>
                Como parte de las operaciones propias del negocio y a fin de cumplir con las finalidades descritas, la 
                Empresa podrá compartir con terceros, nacionales o extranjeros, algunos o todos sus Datos Personales, de 
                conformidad con lo siguiente:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                A) TRABAJADORES
              </h3>
              <p>
                Estos terceros podrán ser autoridades, empresas matrices, subsidiarias, filiales y/o que presten servicios 
                a la Empresa para (a) cumplir con obligaciones legales existentes; (b) cumplir con una orden legal o 
                judicial; y (c) mientras que sea necesario para la operación y funcionamiento ordinario de la Empresa 
                conforme a sus políticas y procedimientos. Los Datos Personales también podrán ser transferidos por la 
                Empresa a terceros que presten servicios de administración de nómina, servicios de salud, servicios de 
                aseguramiento de personal, médico y/o patrimonial a la Empresa, a fin de gestionar y administrar estos 
                servicios a nombre de y en beneficio del titular de los datos para fines derivados de su relación laboral.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                C) PROVEEDORES
              </h3>
              <p>
                Estos terceros podrán ser autoridades, empresa matriz, subsidiarias, filiales y/o empresas que presten 
                servicios a la Empresa, a fin de cumplir con obligaciones legales existentes; cumplir con una orden legal 
                o judicial; y mientras que sea necesario para la operación y funcionamiento ordinario de la Empresa conforme 
                a sus políticas y procedimientos internos con proveedores de la Empresa.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                D) CLIENTES
              </h3>
              <p>
                Estos terceros podrán ser autoridades, empresa matriz, subsidiarias, filiales y/o empresas que presten 
                servicios a la Empresa, a fin de cumplir con obligaciones legales existentes; cumplir con una orden legal 
                o judicial; y mientras que sea necesario para la operación y funcionamiento ordinario de la Empresa conforme 
                a sus políticas y procedimientos internos con proveedores de la Empresa.
              </p>
              <p className="mt-4">
                En todos los casos, la Empresa comunicará el presente Aviso de Privacidad a estos terceros y se asegurará 
                a través de la firma de convenios y/o la adopción de otros documentos vinculantes, que dichos terceros 
                mantengan las medidas de seguridad administrativas, técnicas y físicas necesarias para resguardar sus Datos 
                Personales, así como que dichos terceros únicamente utilicen sus Datos Personales para las finalidades 
                para los cuales fueron recabados.
              </p>
              <p className="mt-4">
                Asimismo, tanto la Empresa, como responsable de recabar los Datos Personales, así como cualquier otra 
                persona relacionada con la Empresa que tenga acceso a la información contenida en este Aviso de Privacidad, 
                quedarán obligados a resguardarla bajo las mismas normas de seguridad y confidencialidad, y a no revelarla 
                ni hacer mal uso de la misma, o en caso contrario serán responsables de conformidad con las leyes aplicables.
              </p>
              <p className="mt-4">
                No obstante, lo anterior, la Empresa no transferirá sus Datos Personales a terceros no relacionados con la 
                Empresa, salvo en los casos antes citados y los previstos en la Ley, sin su consentimiento previo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                4) MEDIOS Y PROCEDIMIENTOS PARA EL EJERCICIO DE LOS DERECHOS ARCO
              </h2>
              <p>
                Usted, como titular de los Datos Personales proporcionados a la Empresa, podrá solicitar en cualquier 
                momento, el ejercicio de sus derechos de acceso, rectificación, cancelación u oposición (los &quot;Derechos 
                ARCO&quot;) al tratamiento de sus Datos Personales, consistentes en: (i) acceder a sus Datos Personales y 
                a los detalles del tratamiento de los mismos; (ii) rectificar sus Datos Personales en caso de ser inexactos 
                o incompletos; (iii) cancelar sus Datos Personales cuando considere que no se requieren para alguna de las 
                finalidades señalados en este Aviso de Privacidad, estén siendo utilizados para finalidades no consentidas o 
                haya finalizado su relación contractual o de servicio u otra con la Empresa; y (iv) oponerse al tratamiento 
                de sus Datos Personales para fines específicos.
              </p>
              <p className="mt-4">
                Para tal fin, usted deberá presentar su petición por escrito al Departamento de Recursos Humanos de la 
                Empresa ubicado en el Domicilio, o bien, enviar su petición al Correo Electrónico dirigida al encargado 
                del Departamento de Datos Personales, según sea aplicable, la cual deberá contener como mínimo la siguiente 
                información: (a) su nombre completo y domicilio, u otro medio idóneo para comunicarle la respuesta a su 
                solicitud; (b) los documentos que acrediten su identidad o, en su caso, la de su representante legal; (c) 
                la descripción clara y precisa de los Datos Personales respecto de los que se busca ejercer alguno de los 
                derechos antes mencionados; y (d) cualquier otro elemento o información que facilite la localización de los 
                Datos Personales, así como cualquier otro documento requerido por la regulación actual en el momento de 
                presentar la solicitud. Usted también podrá solicitar al Departamento de Recursos Humanos o al Correo 
                Electrónico más información sobre el procedimiento para ejercer sus Derechos ARCO, así como el formato de 
                &quot;Solicitud de Derechos ARCO&quot; que sugerimos utilizar para estos efectos.
              </p>
              <p className="mt-4">
                La respuesta a su solicitud le será dada a conocer por la Empresa en los términos y plazos establecidos en 
                la Ley. No obstante, usted podrá obtener más información acerca del estado que guarda su solicitud y del 
                plazo de respuesta de la misma, contactando al Departamento de Recursos Humanos o enviando su petición al 
                Correo Electrónico, donde además podrán atender cualquier aclaración o duda que pudiera tener respecto al 
                tratamiento de sus Datos Personales y el ejercicio de sus Derechos ARCO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                5) REVOCACIÓN DEL CONSENTIMIENTO; LIMITACIÓN DE USO Y DIVULGACIÓN DE LOS DATOS PERSONALES
              </h2>
              <p>
                Usted también podrá revocar, en cualquier momento, el consentimiento que haya otorgado a la Empresa para el 
                tratamiento de sus Datos Personales, así como solicitar que se limite el uso y divulgación de los mismos, 
                siempre y cuando no lo impida una disposición legal. Para tal fin, usted deberá presentar su solicitud por 
                escrito al Departamento de Recursos Humanos de la Empresa ubicado en el Domicilio, o bien, enviar su solicitud 
                al Correo Electrónico con atención al encargado del Departamento de Datos Personales, según sea aplicable. 
                Dicha solicitud deberá cumplir con los mismos requisitos mencionados en la Sección 4) anterior.
              </p>
              <p className="mt-4">
                La respuesta a su solicitud le será dada a conocer por la Empresa en los términos y plazos establecidos en 
                la Ley. No obstante, usted podrá obtener más información acerca del estado que guarda su solicitud y del 
                plazo de respuesta de la misma, contactando al Departamento de Recursos Humanos o enviando su petición al 
                Correo Electrónico, donde además podrán atender cualquier aclaración o duda que pudiera tener respecto al 
                tratamiento y estos derechos que le corresponden respecto a sus Datos Personales.
              </p>
              <p className="mt-4">
                En caso de que sus Datos Personales hubiesen sido remitidos con anterioridad a la fecha de revocación del 
                consentimiento y sigan siendo tratados por encargados, la Empresa hará del conocimiento de éstos últimos 
                dicha revocación, para que procedan a efectuar lo conducente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                6) CAMBIOS AL AVISO DE PRIVACIDAD
              </h2>
              <p>
                La Empresa se reserva el derecho de modificar y/o actualizar este Aviso de Privacidad en alguna o todas sus 
                partes a su entera discreción, en cuyo caso lo comunicará aquí mismo a través de su Página de Internet; y, 
                según sea el caso particular de cada titular, a través de sus redes internas, o por medio de un aviso que se 
                colocará en los medios habituales (físicos o electrónicos) de comunicación de la Empresa y en un lugar visible 
                del Domicilio, o mediante un aviso por escrito dirigido a su correo electrónico, según sea legalmente requerido.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}