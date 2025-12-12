# Instrucciones para actualizar las reglas de seguridad de Firebase

## ¿Por qué cambiar las reglas?

El error **"permission_denied at /confirmations/{id}"** ocurre porque Firebase está denegando acceso a los invitados.

**Problema actual:** Los invitados no pueden leer/escribir confirmaciones de asistencia.

## Pasos para actualizar:

### 1. Acceder a Firebase Console
- Ir a: https://console.firebase.google.com/
- Seleccionar el proyecto: **baby-shower-app-1c029**

### 2. Navegar a Realtime Database
- En el menú izquierdo: **Build** → **Realtime Database**
- Click en la pestaña **Rules**

### 3. Reemplazar con estas reglas:

```json
{
  "rules": {
    "invitations": {
      "$invitationId": {
        ".read": true,
        ".write": false
      }
    },
    "confirmations": {
      "$invitationId": {
        ".read": true,
        ".write": true
      }
    }
  }
}
```

### 4. Click en **Publish**

## Explicación de las reglas:

| Path | Read | Write | Propósito |
|------|------|-------|-----------|
| `/invitations/{id}` | ✅ Todos | ❌ Nadie (servidor solo) | Invitados leen invitaciones, admin escribe |
| `/confirmations/{id}` | ✅ Todos | ✅ Todos | Invitados leen totales, escriben confirmaciones |

## Alternativa más segura (con tokens):

Si prefieres mayor seguridad, usa esto (más complejo):

```json
{
  "rules": {
    "invitations": {
      "$invitationId": {
        ".read": true,
        ".write": false
      }
    },
    "confirmations": {
      "$invitationId": {
        ".read": true,
        ".write": {
          ".validate": "newData.hasChild('guestName') && newData.hasChild('count')"
        }
      }
    }
  }
}
```

## Verificar que funciona:

1. Abrir una invitación desde un navegador incógnito (simula un invitado)
2. Debería cargar sin error "permission_denied"
3. El botón de WhatsApp debería funcionar

---

**Nota:** Si el error persiste después de actualizar, espera ~1 minuto para que los cambios se propaguen.
