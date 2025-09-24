from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class CrowdRequest(BaseModel):
    location: str
    datetime: str

@app.post("/predict")
def predict_crowd(req: CrowdRequest):
    prediction = "High" if req.location == "Somnath" else "Moderate"
    return {"location": req.location, "prediction": prediction, "timestamp": req.datetime}