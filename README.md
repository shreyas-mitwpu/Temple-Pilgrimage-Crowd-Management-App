# Temple & Pilgrimage Crowd Management

## Components

- **backend/api**: Express REST API for core data
- **backend/ai-ml**: Python FastAPI ML service for crowd prediction
- **frontend/mobile**: React Native mobile app for pilgrims
- **frontend/dashboard**: React admin dashboard for temple staff

## Running Locally

1. **Backend API**
   - `cd backend/api && npm install && node app.js`

2. **AI/ML Service**
   - `cd backend/ai-ml && pip install fastapi uvicorn && uvicorn main:app --reload`

3. **Frontend Mobile**
   - `cd frontend/mobile && npm install && npx expo start`

4. **Frontend Dashboard**
   - `cd frontend/dashboard && npm install && npm start`

> Adjust API endpoints to match your network setup.

## Next Steps

- Integrate real ML models and sensor input
- Add authentication, notification, and accessibility features
- Deploy via Docker/AWS/GCP
