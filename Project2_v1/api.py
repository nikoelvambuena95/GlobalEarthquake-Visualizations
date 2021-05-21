#################################################
# Load Dependencies
#################################################

# Import SQL Alchemy
from sqlalchemy import create_engine, func, Column, Integer, String, Float
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import Session

# Import flask
from flask import Flask, request, jsonify

# Import additional dependencies
import requests
import json
import os
import pandas as pd

#Postgres Password
postgresPass="YOUR POSTGRES PASSWORD"

#################################################
# Gather Data
#################################################
data_url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-01&eventtype=earthquake"
# data_url1 = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-02-01&endtime=2014-03-01&eventtype=earthquake"
output_path = os.path.join("/images/")
response = requests.get(data_url)
data = response.json()
########
# Create list variables to contain data
########
coords = []
alert = []
cdi = []
code = []
detail = []
dmin = []
mag = []
magType = []
ids = []
felt = []
gap = []
mmi = []
net = []
nst = []
place = []
rms = []
sig = []
sources = []
status = []
sources = []
Time = []
title = []
tsunami = []
types = []
tz = []
updated = []
url = []
Lat = []
Lon = []
########
# Append all lists
########
for x in data["features"]:
    alert.append(x["properties"]["alert"])

    cdi.append(x["properties"]["cdi"])

    code.append(x["properties"]["code"])

    detail.append(x["properties"]["detail"])

    dmin.append(x["properties"]["dmin"])

    mag.append(x["properties"]["mag"])

    magType.append(x["properties"]["magType"])

    ids.append(x["properties"]["ids"])

    felt.append(x["properties"]["felt"])

    gap.append(x["properties"]["gap"])

    mmi.append(x["properties"]["mmi"])

    net.append(x["properties"]["net"])

    nst.append(x["properties"]["nst"])

    place.append(x["properties"]["place"])

    rms.append(x["properties"]["rms"])

    sig.append(x["properties"]["sig"])

    sources.append(x["properties"]["sources"])

    status.append(x["properties"]["status"])

    Time.append(x["properties"]["time"])

    title.append(x["properties"]["title"])

    tsunami.append(x["properties"]["tsunami"])

    types.append(x["properties"]["type"])

    tz.append(x["properties"]["tz"])

    updated.append(x["properties"]["updated"])

    url.append(x["properties"]["url"])

    value = (x["geometry"]["coordinates"])
    # sep = value.split(",")
    Lon.append(value[0])
    Lat.append(value[1])
########
# Construct dataframes for each list in Pandas
########
alert_df = pd.DataFrame({"Alert": alert})
cdi_df = pd.DataFrame({"CDI": cdi})
code_df = pd.DataFrame({"Code": code})
detail_df = pd.DataFrame({"Detail": detail})
dmin_df = pd.DataFrame({"Depth": dmin})
mag_df = pd.DataFrame({"Magnitude":mag})
magType_df = pd.DataFrame({"Waveform":magType})
ids_df = pd.DataFrame({"ID":ids})
felt_df = pd.DataFrame({"Felt":felt})
gap_df = pd.DataFrame({"Gap":gap})
mmi_df = pd.DataFrame({"MMI":mmi})
net_df = pd.DataFrame({"Net":net})
nst_df = pd.DataFrame({"NST":nst})
place_df = pd.DataFrame({"Place":place})
rms_df = pd.DataFrame({"RMS":rms})
sig_df = pd.DataFrame({"Sig":sig})
sources_df = pd.DataFrame({"Sources":sources})
status_df = pd.DataFrame({"Status":status})
time_df = pd.DataFrame({"Time":Time})
title_df = pd.DataFrame({"Title":title})
tsunami_df = pd.DataFrame({"Tsunami":tsunami})
types_df = pd.DataFrame({"Type":types})
tz_df = pd.DataFrame({"TZ":tz})
updated_df = pd.DataFrame({"Updated":updated})
# url_df = pd.DataFrame({"URL":url})
# coords_Df = pd.DataFrame({"Coordinates":coords})
Lat_Df = pd.DataFrame({"Latitude":Lat})
Lon_Df = pd.DataFrame({"Longitude":Lon})
########
# Merges dataframes made above
########
ses_df = pd.DataFrame(Lat_Df)
# ses_df = ses_df.merge(Lat_Df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(Lon_Df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(cdi_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(code_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(detail_df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(dmin_df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(mag_df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(magType_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(ids_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(felt_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(gap_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(mmi_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(net_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(nst_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(rms_df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(place_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(sig_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(sources_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(status_df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(time_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(title_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(tsunami_df, "inner", right_index=True, left_index=True)
ses_df = ses_df.merge(types_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(tz_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(updated_df, "inner", right_index=True, left_index=True)
# ses_df = ses_df.merge(url_df, "inner", right_index=True, left_index=True)
########
# Create UNCERF dataframe
########

uncerf_df = pd.read_csv('mapbox/UNCERF.csv')
uncerf_df['Total Disaster Relief($)'] = uncerf_df['Total Disaster Relief($)'].replace(',','', regex=True)
########
# Create the uncerf and earthquake class
########
Base = declarative_base()
class uncerf(Base):
    __tablename__ = 'relief_expenses'
    id = Column(Integer, primary_key=True)
    Country = Column(String(255))
    Total_relief = Column(Float)

class earthquake(Base):
    __tablename__ = 'seismic_data'
    id = Column(Integer, primary_key=True)
    Latitude = Column(String(255))
    Longitude = Column(String(255))
    Depth = Column(Float)
    Magnitude = Column(Float)
    Waveform = Column(String(255))
    Place = Column(String(255))
    Time = Column(Float)
    Type = Column(String(255))
########
# Create a connection to a Postgres database
########
engine = create_engine(f"postgresql+psycopg2://postgres:{postgresPass}@:5432/project_2")
####
# Create the 'seismic_data' table within the database
####
Base.metadata.create_all(engine)

from sqlalchemy.orm import Session
session = Session(bind=engine)

for index, row in ses_df.iterrows():
    data_row = earthquake(Latitude=row[0], Longitude=row[1], Depth=row[2], Magnitude=row[3],
                     Waveform=row[4], Place=row[5], Time=row[6], Type=row[7])
    session.add(data_row)

    session.commit()

for index, row in uncerf_df.iterrows():
    data_row = uncerf(Country=row[0], Total_relief=row[1])
    session.add(data_row)

    session.commit()

session.close()
#################################################
# Database Setup
#################################################

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Earthquake = Base.classes.seismic_data
Relief = Base.classes.relief_expenses

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
@app.route("/")
def home():
    print("Server access home")
    return(
        f"project 2: earthquake data API<br>"
        f"Available routes:<br>"
        f"/api/v1.0/earthquake_data<br>"
        f"/api/v1.0/relief_data"
    )

@app.route("/api/v1.0/earthquake_data")
def earthquakes():
    print("Server access earthquake data")
    session = Session(engine)

    results = session.query(Earthquake.id, Earthquake.Latitude, Earthquake.Longitude, Earthquake.Depth,
    Earthquake.Magnitude, Earthquake.Waveform, Earthquake.Place, Earthquake.Time, Earthquake.Type
    ).all()

    session.close()

    earthquake_data = []
    for id, Latitude, Longitude, Depth, Magnitude, Waveform, Place, Time, Type in results:
        earthquake_dict = {}
        earthquake_dict["id"] = id
        earthquake_dict["Latitude"] = Latitude
        earthquake_dict["Longitude"] = Longitude
        earthquake_dict["Depth"] = Depth
        earthquake_dict["Magnitude"] = Magnitude
        earthquake_dict["Waveform"] = Waveform
        earthquake_dict["Place"] = Place
        earthquake_dict["Time"] = Time
        earthquake_dict["Type"] = Type
        earthquake_data.append(earthquake_dict)

    return jsonify(earthquake_data)

@app.route("/api/v1.0/relief_data")
def earthquake_relief():
    print("Server access relief data")
    session = Session(engine)

    results = session.query(Relief.id, Relief.Country, Relief.Total_relief
    ).all()

    session.close()

    relief_data = []
    for id, Country, Total_relief in results:
        relief_dict = {}
        relief_dict["id"] = id
        relief_dict["Country"] = Country
        relief_dict["Total_relief"] = Total_relief
        relief_data.append(relief_dict)

    return jsonify(relief_data)

if __name__=="__main__":
    app.run(debug=True)
